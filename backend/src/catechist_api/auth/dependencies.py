"""FastAPI authentication dependencies."""

from fastapi import Depends, HTTPException, status
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer
from jwt.exceptions import InvalidTokenError as JWTError
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from catechist_api.auth.jwt import TokenPayload, decode_token
from catechist_api.database import get_db
from catechist_api.models import Catechist

_bearer_scheme = HTTPBearer(auto_error=False)


async def get_current_user(
    credentials: HTTPAuthorizationCredentials | None = Depends(_bearer_scheme),
    db: AsyncSession = Depends(get_db),
) -> TokenPayload:
    """Decode JWT from Authorization header and return the token payload."""
    if credentials is None:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Missing authentication token",
            headers={"WWW-Authenticate": "Bearer"},
        )

    try:
        user = decode_token(credentials.credentials)
    except JWTError as error:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid or expired token",
            headers={"WWW-Authenticate": "Bearer"},
        ) from error

    if user.type == "catechist":
        result = await db.execute(select(Catechist).where(Catechist.id == user.sub))
        catechist = result.scalar_one_or_none()
        if (
            catechist is None
            or not catechist.is_active
            or catechist.parish_id != user.parish_id
            or catechist.auth_version != user.auth_version
        ):
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Session has been revoked",
                headers={"WWW-Authenticate": "Bearer"},
            )

    return user


async def require_catechist(
    user: TokenPayload = Depends(get_current_user),
) -> TokenPayload:
    """Ensure the authenticated user is a catechist (not a student)."""
    if user.type != "catechist":
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Catechist access required",
        )
    return user


async def require_parish_admin(
    user: TokenPayload = Depends(require_catechist),
) -> TokenPayload:
    """Ensure the authenticated user is a parish admin."""
    if user.type != "catechist" or user.role != "parish_admin":
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Parish admin access required",
        )
    return user
