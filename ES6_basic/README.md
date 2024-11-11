# ES6 Basics Project

## Description

This project is designed to introduce and practice the new features and syntax introduced in ECMAScript 6 (ES6). By the end of this project, you should have a solid understanding of ES6 concepts such as block-scoping, arrow functions, default parameters, rest parameters, spread syntax, and more. 

## Learning Objectives

By the end of this project, you should be able to explain:

- What ES6 is
- New features introduced in ES6
- The difference between a constant and a variable
- Block-scoped variables
- Arrow functions and function parameters default to them
- Rest and spread function parameters
- String templating in ES6
- Object creation and their properties in ES6
- Iterators and for-of loops

## Requirements

### General

- All files will be interpreted and compiled on Ubuntu 20.04 LTS using Node.js 20.x.x and npm 9.x.x.
- Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`.
- All files should end with a new line.
- A `README.md` file must be included in the project root.
- Code should use the `.js` extension.
- Code will be tested using the Jest testing framework.
- Code will be analyzed using ESLint with specific rules provided.
- All functions must be exported.

### Setup

1. **Install Node.js 20.x.x**:

    ```bash
    curl -sL https://deb.nodesource.com/setup_20.x -o nodesource_setup.sh
    sudo bash nodesource_setup.sh
    sudo apt install nodejs -y
    nodejs -v # v20.15.1
    npm -v    # 10.7.0
    ```

2. **Install Jest, Babel, and ESLint** in your project directory:

    ```bash
    npm install --save-dev jest
    npm install --save-dev babel-jest @babel/core @babel/preset-env
    npm install --save-dev eslint
    ```

3. **Create the configuration files** in the project directory:

    - `package.json`
    - `babel.config.js`
    - `.eslintrc.js`

4. Run `npm install` to install all necessary dependencies.

## Task

| Task Number | Task Description                                          |
|-------------|-----------------------------------------------------------|
| 0           | Use `const` and `let` appropriately instead of `var`.     |
| 1           | Avoid variable overwriting by using `let` or `const`.     |
| 2           | Rewrite a function using ES6 arrow function syntax.       |
| 3           | Use default parameters to simplify the function.          |
| 4           | Use the rest parameter syntax to handle variable arguments. |
| 5           | Use the spread operator to combine arrays and strings.    |
| 6           | Use template literals to embed expressions in strings.    |
| 7           | Simplify object property declarations using shorthand.    |
| 8           | Use computed property names to dynamically create object keys. |
| 9           | Use ES6 shorthand for defining methods in objects.        |
| 10          | Use `for...of` loops instead of `for...in` loops.         |
| 11          | Create an object using a department name and employee list. |
| 12          | Create a report object with employee info and a department count method. |

## Author
This project was completed as part of the Holberton School curriculum by **Dijeont Jean-Paul.**