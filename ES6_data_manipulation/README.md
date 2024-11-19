# ES6 Data Manipulation

## Description

This project focuses on understanding and manipulating data using ES6 features. The goal is to explore the usage of advanced data structures and array methods in JavaScript, such as `map`, `filter`, and `reduce`, along with `Set`, `Map`, and `WeakMap`.

---

## Learning Objectives

By completing this project, you will learn to:

- Use `map`, `filter`, and `reduce` on arrays.
- Understand and work with Typed Arrays.
- Utilize the `Set`, `Map`, and `WeakMap` data structures.

---

## Requirements

- **Environment**: Ubuntu 20.04 LTS
- **Node.js version**: 20.x.x
- **NPM version**: 9.x.x
- All files must end with a new line.
- Use `js` file extension for all code files.
- Code will be tested using `Jest` and linted with `ESLint`.

---

## Setup

### Install Node.js

Run the following commands in your home directory to install Node.js:

```bash
curl -sL https://deb.nodesource.com/setup_20.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
```

**Verify the installation:**
nodejs -v

npm -v
**Install Jest, Babel, and ESLint**

**Install the necessary dependencies in your project directory:**
npm install --save-dev jest
npm install --save-dev babel-jest @babel/core @babel/preset-env
npm install --save-dev eslint

## Tasks

| Task Number | Title                         | Description                                                                                                    | File                                |
|-------------|-------------------------------|----------------------------------------------------------------------------------------------------------------|-------------------------------------|
| 0           | Basic List of Objects         | Create a function `getListStudents` that returns an array of objects with `id`, `firstName`, and `location`.   | `0-get_list_students.js`           |
| 1           | More Mapping                  | Create a function `getListStudentIds` that returns an array of IDs using the `map` function.                   | `1-get_list_student_ids.js`        |
| 2           | Filter                        | Create a function `getStudentsByLocation` that filters students by a given city using the `filter` method.     | `2-get_students_by_loc.js`         |
| 3           | Reduce                        | Create a function `getStudentIdsSum` that calculates the sum of all student IDs using the `reduce` method.     | `3-get_ids_sum.js`                 |
| 4           | Combine                       | Create a function `updateStudentGradeByCity` that updates student grades for a specific city using `filter` and `map`. | `4-update_grade_by_city.js`         |
| 5           | Typed Arrays                  | Create a function `createInt8TypedArray` that creates a new `ArrayBuffer` and inserts an `Int8` value.         | `5-typed_arrays.js`                |
| 6           | Set Data Structure            | Create a function `setFromArray` that converts an array into a `Set`.                                          | `6-set.js`                         |
| 7           | More Set Data Structure       | Create a function `hasValuesFromArray` that checks if all elements in an array exist in a `Set`.               | `7-has_array_values.js`            |
| 8           | Clean Set                     | Create a function `cleanSet` that returns a string of `Set` values starting with a specific string.            | `8-clean_set.js`                   |
| 9           | Map Data Structure            | Create a function `groceriesList` that returns a `Map` of grocery items and their quantities.                  | `9-groceries_list.js`              |
| 10          | More Map Data Structure       | Create a function `updateUniqueItems` that updates `Map` items with a quantity of `1` to `100`.                | `10-update_uniq_items.js`          |

# Author
This project was completed as part of the Holberton School curriculum by **Jean-Paul Dijeont**.