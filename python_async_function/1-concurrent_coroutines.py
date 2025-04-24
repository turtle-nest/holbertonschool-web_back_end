#!/usr/bin/env python3
""" Module that contains wait_n, an async routine """

import asyncio

from typing import List

wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """ An async routine called wait_n that takes
        in 2 int arguments (in this order): n and max_delay.
    """
    delays = []
    for _ in range(n):
        delays.append(asyncio.create_task(wait_random(max_delay)))

    results = []
    for task in asyncio.as_completed(delays):
        delay = await task
        results.append(delay)

    return results
