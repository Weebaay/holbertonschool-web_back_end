#!/usr/bin/env pyhton3
"""Hypermedia pagination"""

import csv
import math
from typing import List, Dict

index_range = __import__('0-simple_helper_function').index_range


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """
        Returns a page of the dataset.

        Args:
            page (int): The page number (1-indexed).
            page_size (int): The number of items per page.

        Returns:
            List[List]:
            A list of rows from the dataset corresponding to the page.
        """
        assert isinstance(page, int) and page > 0, "page must be a positive"
        assert isinstance(page_size, int) and page_size > 0

        start, end = index_range(page, page_size)

        dataset = self.dataset()
        if start >= len(dataset):
            return []
        return dataset[start:end]

    def get_hyper(self, page: int = 1, page_size: int = 10) -> Dict:
        """
        Returns a dictionary with hypermedia-style pagination metadata.
        """
        data = self.get_page(page, page_size)
        dataset_length = len(self.dataset())
        total_pages = math.ceil(dataset_length / page_size)

        return {
            "page_size": len(data),  # Size of the current page
            "page": page,  # Current page number
            "data": data,  # Current page data
            "next_page": page + 1 if page < total_pages else None,  # Next page
            "prev_page": page - 1 if page > 1 else None,  # Previous page
            "total_pages": total_pages  # Total number of pages
        }