#!/usr/bin/env python3
""" A Python function that returns
    the list of school having a specific topic.
"""


def schools_by_topic(mongo_collection, topic):
    """ The function schools_by_topic."""
    return list(mongo_collection.find({"topics": topic}))
