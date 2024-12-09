#!/usr/bin/env python3
"""
Corourine that takes no arguments, runs in aa loop 10 times,
waiting 1 ssecond at each iteration and yields a random number between
0 and 10.
"""
import asyncio
import random


async def async_generator():
    """
    Generates 10 times , yields a random numerber 0 and 10.
    """
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
