#!/usr/bin/env python3
"""
Simple Helper Function
"""

from typing import Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """
    This function should return a tuple of size two containing
    a start index and end index.
    """
    start = (page - 1) * page_size
    end = start + page_size
    return (start, end)
