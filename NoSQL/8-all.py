#!/usr/bin/env python3
""" Module that contains list_all function."""


def list_all(mongo_collection):
    """ A function that lists all document
        in a pymongo collection.
    """
    return list(mongo_collection.find())
