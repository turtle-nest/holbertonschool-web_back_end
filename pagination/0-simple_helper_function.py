#!/usr/bin/env python3
""" Module that contains index_range function."""

from typing import Tuple


def index_range(page, page_size) -> Tuple[int, int]:
    """
    Calculate the start and end indexes for pagination.

    Args:
        page (int): The current page number (1-indexed).
        page_size (int): The number of items per page.

    Returns:
        Tuple[int, int]: A tuple containing the start index (inclusive)
                         and end index (exclusive) for slicing a dataset.
    """
    start = (page - 1) * page_size
    end = page * page_size

    return (start, end)
