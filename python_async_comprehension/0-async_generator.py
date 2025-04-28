#!/usr/bin/env python3
""" A module that contains async_generator coroutine """

import random
import asyncio
from typing import AsyncGenerator


async def async_generator() -> AsyncGenerator[float, None]:
    """ Coroutine that yields a random float between 0 and 10,
        10 times with a 1 second wait each.
    """
    for _ in range(0, 10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
