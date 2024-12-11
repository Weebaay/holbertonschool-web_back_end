# Pagination

This project demonstrates how to implement pagination in Python for large datasets. The tasks include basic pagination, hypermedia pagination, and deletion-resilient pagination. The dataset used is `Popular_Baby_Names.csv`.

---

## Resources

### Read or Watch:
- [REST API Design: Pagination](https://restfulapi.net/rest-api-design-tutorial-with-example/)
- [HATEOAS](https://en.wikipedia.org/wiki/HATEOAS)

---

## Learning Objectives

By completing this project, you should be able to explain the following concepts to anyone, without external references:
- How to paginate a dataset with simple `page` and `page_size` parameters.
- How to paginate a dataset with hypermedia metadata.
- How to paginate in a deletion-resilient manner.

---

## Requirements

- **Environment:** 
  - All files will be interpreted/compiled on Ubuntu 20.04 LTS using Python 3.9.
- **Style:**
  - Your code should follow the `pycodestyle` style guide (version 2.5.*).
- **File Format:**
  - All files should end with a new line.
  - The first line of all files should be exactly `#!/usr/bin/env python3`.
- **Documentation:**
  - Each module, class, and method must have proper documentation explaining its purpose.
- **Type Annotations:**
  - All functions and coroutines must include type annotations.
- **File Length:**
  - The length of your files will be tested using the `wc` command.

---

## Setup: Dataset

Download the `Popular_Baby_Names.csv` file and use it as the dataset for the project. This file contains information about baby names, including year, gender, ethnicity, count, and rank.

---

## Tasks

| **Task Number** | **Task Name**                            | **Description**                                                                                                                                 |
|------------------|------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| **0**           | Simple helper function                  | Implement a function `index_range` that takes `page` and `page_size` and returns a tuple of start and end indexes.                              |
| **1**           | Simple pagination                       | Implement a `Server` class with a method `get_page` to paginate the dataset based on `page` and `page_size`.                                   |
| **2**           | Hypermedia pagination                   | Extend the `Server` class with a `get_hyper` method to include metadata like `page_size`, `next_page`, `prev_page`, and `total_pages`.          |
| **3**           | Deletion-resilient hypermedia pagination | Implement a `get_hyper_index` method to handle pagination that remains consistent when rows are deleted between queries.                        |

---

## Examples

### Task 0: Simple Helper Function

```python
#!/usr/bin/env python3
"""
Main file
"""

index_range = __import__('0-simple_helper_function').index_range

res = index_range(1, 7)
print(type(res))
print(res)

res = index_range(page=3, page_size=15)
print(type(res))
print(res)
```

## Repository

    GitHub Repository: holbertonschool-web_back_end
    Directory: pagination

## Author
This project was completed as part of the Holberton School curriculum by **Jean-Paul Dijeont**.