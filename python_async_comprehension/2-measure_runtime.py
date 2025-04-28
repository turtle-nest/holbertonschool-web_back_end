#!/usr/bin/env python3
""" Module containing measure_runtime coroutine """

import asyncio
import time
from typing import List

async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """Measure the total runtime of running 4
        async_comprehensions in parallel.
    """
    start_time = time.perf_counter()

    await asyncio.gather(
        async_comprehension(),
        async_comprehension(),
        async_comprehension(),
        async_comprehension(),
    )

    end_time = time.perf_counter()
    return end_time - start_time
