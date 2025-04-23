#!/usr/bin/env python3
""" A module that contains element_length function """

from typing import Iterable, Sequence, Tuple, List


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence[int]]]:
    """ The element_length function """
    return [(i, len(i)) for i in lst]
