#!/usr/bin/env python3
"""Deletion resilient hypermedia pagination"""

import csv
import math
from typing import List, Dict


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None
        self.__indexed_dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def indexed_dataset(self) -> Dict[int, List]:
        """Dataset indexed by sorting position, starting at 0
        """
        if self.__indexed_dataset is None:
            dataset = self.dataset()
            truncated_dataset = dataset[:1000]
            self.__indexed_dataset = {
                i: dataset[i] for i in range(len(dataset))
            }
        return self.__indexed_dataset

    def get_hyper_index(self, index: int = None, page_size: int = 10) -> Dict:
        """
        Returns a dictionary with hypermedia-style pagination metadata,
        handling deletions in the dataset.
        """
        indexed_dataset = self.indexed_dataset()
        assert isinstance(index, int) and 0 <= index < len(indexed_dataset)

        data = []
        current_index = index  # Démarrer à l'index donné
        dataset_keys = list(indexed_dataset.keys())  # Liste des clés indexées

        while len(data) < page_size and current_index < len(dataset_keys):
            key = dataset_keys[current_index]
            if key in indexed_dataset:
                data.append(indexed_dataset[key])
            current_index += 1

        next_index = current_index if current_index < len(dataset_keys) else None

        return {
            "index": index,        # Index de départ
            "data": data,          # Données de la page actuelle
            "page_size": len(data),
            "next_index": next_index  # Prochain index à utiliser
        }
