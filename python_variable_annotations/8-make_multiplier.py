#!/usr/bin/env python3
""" A module that contains make_multiplier function """

from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """ A type-annotated function make_multiplier that takes a float
        multiplier as argument and returns a function 
        that multiplies a float by multiplier
    """
    def multiplier_function(x: float) -> float:
        """ A multiplier function """
        return x * multiplier

    return multiplier_function
