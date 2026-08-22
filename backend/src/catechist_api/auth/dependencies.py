"""FastAPI authentication dependencies."""

from fastapi import Depends, HTTPException, status
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer
from jose import JWTError

from catechist_api.auth.jwt import TokenPayload, decode_token

_bearer_scheme = HTTPBearer(auto_error=False)


async def get_current_user(
    credentials: HTTPAuthorizationCredentials | None = Depends(_bearer_scheme),
) -> TokenPayload:
    """Decode JWT from Authorization header and return the token payload."""
    if credentials is None:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Missing authentication token",
            headers={"WWW-Authenticate": "Bearer"},
        )

    try:
        return decode_token(credentials.credentials)
    except JWTError as error:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid or expired token",
            headers={"WWW-Authenticate": "Bearer"},
        ) from error


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
    user: TokenPayload = Depends(get_current_user),
) -> TokenPayload:
    """Ensure the authenticated user is a parish admin."""
    if user.type != "catechist" or user.role != "parish_admin":
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Parish admin access required",
        )
    return user
