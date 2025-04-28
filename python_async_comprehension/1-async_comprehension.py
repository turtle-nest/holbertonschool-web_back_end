#!/usr/bin/env python3
""" A module containing the async_comprehension coroutine """

from typing import List
async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    """Collects 10 random floats asynchronously using a comprehension."""
    return [i async for i in async_generator()]
