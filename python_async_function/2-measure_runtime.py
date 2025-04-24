#!/usr/bin/env python3
""" A module that contains measure_time coroutine """

import asyncio
import time

wait_n = __import__('1-concurrent_coroutines').wait_n


async def measure_time(n: int, max_delay: int) -> float:
    """ A measure_time function with integers n and max_delay
        as arguments that measures the total execution time
        for wait_n(n, max_delay), and returns total_time / n.
    """
    start_time = time.perf_counter()
    await wait_n(n, max_delay)
    end_time = time.perf_counter()

    total_time = end_time - start_time
    return total_time / n
