# Python - Async Comprehension

## Description
This project focuses on understanding and implementing asynchronous generators, comprehensions, and type annotations in Python. You'll learn to write asynchronous code, type-annotate generators, and measure runtime for concurrent executions.

---

## Concepts
- **Asynchronous Generators**: Special functions that allow yielding values asynchronously.
- **Async Comprehensions**: Efficiently collect asynchronous results in a list or other data structure.
- **Type-Hints for Generators**: Annotating asynchronous functions and generators for clarity and static type checking.

---

## Resources
Here are some resources to help you:
- [PEP 530 – Asynchronous Comprehensions](https://www.python.org/dev/peps/pep-0530/)
- [What’s New in Python: Asynchronous Comprehensions / Generators](https://docs.python.org/3/whatsnew/3.6.html#whatsnew36-pep530)
- [Type-hints for generators](https://docs.python.org/3/library/typing.html#typing.Generator)

---

## Learning Objectives
By the end of this project, you should be able to:
1. Write an asynchronous generator.
2. Use async comprehensions effectively.
3. Type-annotate asynchronous generators.

---

## Requirements
### General
- Allowed editors: `vi`, `vim`, `emacs`.
- All files will be interpreted/compiled on **Ubuntu 20.04 LTS** using `python3` (version 3.9).
- Files should end with a new line.
- The first line of every file must be: `#!/usr/bin/env python3`.
- Include a `README.md` file at the root of your project folder.
- Use **pycodestyle** style guide (version 2.5.x).
- Length of files will be tested using `wc`.
- All modules should include proper documentation.
- Functions must include a docstring explaining their purpose.
- All functions and coroutines must be **type-annotated**.

---

## Tasks

| Task # | Task Name                          | Description                                                                                                                | File                                |
|--------|------------------------------------|----------------------------------------------------------------------------------------------------------------------------|-------------------------------------|
| 0      | Async Generator                   | Write a coroutine `async_generator` that loops 10 times, waits 1 second asynchronously, and yields a random number (0–10). | `0-async_generator.py`             |
| 1      | Async Comprehensions             | Write a coroutine `async_comprehension` that collects 10 random numbers from `async_generator` and returns them.           | `1-async_comprehension.py`         |
| 2      | Run time for four parallel comprehensions | Write a coroutine `measure_runtime` that runs `async_comprehension` four times in parallel using `asyncio.gather`. Measure the runtime. | `2-measure_runtime.py`             |


#### Example Usage:
```python
#!/usr/bin/env python3

import asyncio
async_generator = __import__('0-async_generator').async_generator

async def print_yielded_values():
    result = []
    async for i in async_generator():
        result.append(i)
    print(result)

asyncio.run(print_yielded_values())
```
## Author## Author
This project was completed as part of the Holberton School curriculum by **Jean-Paul Dijeont**.