#!/usr/bin/env python3
""" A module that contains task_wait_n coroutine. """

import asyncio

from typing import List

task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """ An async routine called task_wait_n that takes
        in 2 int arguments (in this order): n and max_delay.
    """
    tasks = [task_wait_random(max_delay) for _ in range(n)]

    results = []
    for task in asyncio.as_completed(tasks):
        delay = await task
        results.append(delay)

    return results
