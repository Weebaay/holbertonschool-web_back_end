# ES6 Classes Project

This project focuses on learning and implementing **ES6 Classes** in JavaScript, with various exercises that cover topics like class constructors, inheritance, static methods, and more. The goal is to familiarize yourself with the use of classes and object-oriented programming in JavaScript.

## Learning Objectives

By the end of this project, you will be able to:

- Define and create a **Class**.
- Add methods to a class.
- Add **static methods** to a class.
- Understand and implement **inheritance** with classes.
- Use **metaprogramming** and **symbols**.
- Implement **getters** and **setters** for class attributes.

## Resources

- [Classes - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [Metaprogramming in JavaScript](https://www.freecodecamp.org/news/metaprogramming-in-javascript/)
  
## Setup

1. **Install NodeJS 20.x.x**
   - Run the following commands to install NodeJS in your home directory:
     ```bash
     curl -sL https://deb.nodesource.com/setup_20.x -o nodesource_setup.sh
     sudo bash nodesource_setup.sh
     sudo apt install nodejs -y
     ```

   - Check if NodeJS is installed:
     ```bash
     nodejs -v
     npm -v
     ```

2. **Install Jest, Babel, and ESLint in your project directory:**
   -
     - Install Jest:
       ```bash
       npm install --save-dev jest
       ```
     - Install Babel:
       ```bash
       npm install --save-dev babel-jest @babel/core @babel/preset-env
       ```
     - Install ESLint:
       ```bash
       npm install --save-dev eslint
       ```

3. **Configuration files**

   - `package.json` (make sure to configure the scripts and dev dependencies):
     ```json
     {
       "scripts": {
         "lint": "./node_modules/.bin/eslint",
         "check-lint": "lint [0-9]*.js",
         "dev": "npx babel-node",
         "test": "jest",
         "full-test": "./node_modules/.bin/eslint [0-9]*.js && jest"
       },
       "devDependencies": {
         "@babel/core": "^7.6.0",
         "@babel/preset-env": "^7.6.0",
         "@babel/node": "^7.8.0",
         "eslint": "^6.8.0",
         "eslint-config-airbnb-base": "^14.0.0",
         "eslint-plugin-import": "^2.18.2",
         "eslint-plugin-jest": "^22.17.0",
         "jest": "^24.9.0"
       }
     }
     ```

   - `babel.config.js`:
     ```javascript
     module.exports = {
       presets: [
         [
           '@babel/preset-env',
           {
             targets: {
               node: 'current',
             },
           },
         ],
       ],
     };
     ```

   - `.eslintrc.js`:
     ```javascript
     module.exports = {
       env: {
         browser: false,
         es6: true,
         jest: true,
       },
       extends: [
         'airbnb-base',
         'plugin:jest/all',
       ],
       globals: {
         Atomics: 'readonly',
         SharedArrayBuffer: 'readonly',
       },
       parserOptions: {
         ecmaVersion: 2018,
         sourceType: 'module',
       },
       plugins: ['jest'],
       rules: {
         'max-classes-per-file': 'off',
         'no-underscore-dangle': 'off',
         'no-console': 'off',
         'no-shadow': 'off',
         'no-restricted-syntax': [
           'error',
           'LabeledStatement',
           'WithStatement',
         ],
       },
       overrides: [
         {
           files: ['*.js'],
           excludedFiles: 'babel.config.js',
         },
       ],
     };
     ```

4. **Run the project**:

   After setting up, run the following commands to check your code:

   - Run ESLint to check for code style issues:
     ```bash
     npx eslint --fix .
     ```
   - Run the tests with Jest:
     ```bash
     npm run test
     ```

   - Run full test (checks both linting and Jest tests):
     ```bash
     npm run full-test
     ```

## Tasks

| **Task Number** | **Task Title**                             | **Description**                                                                                                              | **Test Command**                        |
|-----------------|--------------------------------------------|------------------------------------------------------------------------------------------------------------------------------|----------------------------------------|
| 0               | You used to attend a place like this at some point | Implement a class named `ClassRoom` that accepts one attribute `maxStudentsSize` (Number) and assigns it to `_maxStudentsSize`. | `npm run dev 0-main.js`                |
| 1               | Let's make some classrooms                 | Import the `ClassRoom` class from `0-classroom.js` and implement a function `initializeRooms` that returns an array of 3 `ClassRoom` objects with sizes 19, 20, and 34. | `npm run dev 1-main.js`                |
| 2               | A Course, Getters, and Setters             | Implement a class named `HolbertonCourse` with constructor attributes (`name`, `length`, `students`), and implement getters and setters for each attribute. | `npm run dev 2-main.js`                |
| 3               | Methods, static methods, computed methods names..... MONEY | Implement a class named `Currency` with methods `displayFullCurrency` and getters/setters for `code` and `name`.             | `npm run dev 3-main.js`                |
| 4               | Pricing                                    | Import the `Currency` class and implement a `Pricing` class with methods to display full price and a static method `convertPrice`. | `npm run dev 4-main.js`                |
| 5               | A Building                                 | Implement an abstract class `Building` that requires any extending class to implement the `evacuationWarningMessage` method. | `npm run dev 5-main.js`                |
| 6               | Inheritance                                | Create a class `SkyHighBuilding` that extends `Building` and implements `evacuationWarningMessage` to display a custom warning message. | `npm run dev 6-main.js`                |
| 7               | Airport                                    | Implement a class `Airport` with constructor attributes `name` and `code`. The default string description of the class should return the airport code. | `npm run dev 7-main.js`                |
| 8               | Primitive - Holberton Class                | Implement a class `HolbertonClass` that implements custom behaviors when the class is cast into a `Number` or `String`.        | `npm run dev 8-main.js`                |
| 9               | Hoisting                                   | Fix the `HolbertonClass` and `StudentHolberton` classes to correctly reference instances and implement correct getter methods. | `npm run dev 9-main.js`                |
| 10              | Vroom                                      | Implement a `Car` class with a `cloneCar` method that clones the car instance. Utilize **Symbols** in ES6 to help define the clone behavior. | `npm run dev 10-main.js`               |

**Test Command**:
```bash
 npm run dev 0-main.js
 ```

 ## Author 

 This project was completed as part of the Holberton School curriculum by **Dijeont Jean-Paul**.