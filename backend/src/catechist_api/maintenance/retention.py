"""Preview or execute the configured database retention policy."""

import argparse
import asyncio
import json
from datetime import UTC, datetime

from catechist_api.database import async_session_factory, engine
from catechist_api.services.retention_service import apply_retention


async def run(*, execute: bool) -> dict[str, int | bool]:
    try:
        async with async_session_factory() as db:
            result = await apply_retention(db, now=datetime.now(UTC), execute=execute)
            if execute:
                await db.commit()
            else:
                await db.rollback()
        return result
    finally:
        await engine.dispose()


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--execute",
        action="store_true",
        help="Permanently delete expired records. Without this flag, only preview counts.",
    )
    args = parser.parse_args()
    print(json.dumps(asyncio.run(run(execute=args.execute)), sort_keys=True))


if __name__ == "__main__":
    main()
