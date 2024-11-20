# ES6 Promises

## Description

This project focuses on understanding and using **ES6 Promises** to handle asynchronous operations in JavaScript. It includes tasks that require implementing, chaining, and managing Promises effectively.

---

## Resources

Read or watch:

- [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [JavaScript Promise: An introduction](https://web.dev/promises/)
- [Await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
- [Async](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- [Throw / Try](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)

---

## Learning Objectives

By the end of this project, you should be able to:

- Explain **Promises** (how, why, and what).
- Use the `then`, `resolve`, and `catch` methods.
- Utilize every method of the `Promise` object.
- Understand `throw` and `try` for error handling.
- Use the `await` operator.
- Write and use `async` functions.

---

## Requirements

- All files will be interpreted/compiled on **Ubuntu 20.04 LTS** using **Node.js 20.x.x** and **npm 9.x.x**.
- Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`.
- All files must end with a new line.
- A `README.md` file, at the root of the project, is mandatory.
- Your code must use the `.js` extension.
- Your code will be tested using **Jest** and the command `npm run test`.
- Your code must pass linting with **ESLint**.
- All functions must be exported.

---

## Setup

### Install Node.js

Run the following commands in your home directory:

```bash
curl -sL https://deb.nodesource.com/setup_20.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
```

**Verify the installation:**
	nodejs -v

	npm -v

**Install Jest, Babel, and ESLint**

**In your project directory, install the required dependencies:**
	npm install --save-dev jest
	npm install --save-dev babel-jest @babel/core @babel/preset-env @babel/cli
	npm install --save-dev eslint


**Files**


1. package.json: Contains project dependencies and scripts.
2. babel.config.js: Configures Babel for ES6 support.
3. utils.js: Contains helper functions like uploadPhoto and createUser.
4. .eslintrc.js: ESLint configuration file.

**Run the following command to install dependencies from package.json:**
	npm install

**Response Data Format**

- uploadPhoto returns:
	{
  		"status": 200,
  		"body": "photo-profile-1"
	}

- createUser returns:
	{
  		"firstName": "Guillaume",
  		"lastName": "Salva"
	}

## Task

| Task Number | Title                                    | Description                                                                                                    | File                         |
|-------------|------------------------------------------|----------------------------------------------------------------------------------------------------------------|------------------------------|
| 0           | Keep every promise you make             | Create a function `getResponseFromAPI` that returns a Promise.                                                | `0-promise.js`              |
| 1           | Don't make a promise you can't keep     | Create a function `getFullResponseFromAPI` that resolves or rejects a Promise based on a boolean input.        | `1-promise.js`              |
| 2           | Catch me if you can!                    | Handle a Promise with `then`, `catch`, and always log a message.                                               | `2-then.js`                 |
| 3           | Handle multiple successful promises     | Resolve multiple Promises from `utils.js` and log their results.                                               | `3-all.js`                  |
| 4           | Simple promise                          | Return a resolved Promise containing an object with `firstName` and `lastName`.                                | `4-user-promise.js`         |
| 5           | Reject the promises                     | Write a function `uploadPhoto` that rejects a Promise with an error message.                                   | `5-photo-reject.js`         |
| 6           | Handle multiple promises                | Combine multiple Promises and return their statuses and values/errors in an array.                             | `6-final-user.js`           |
| 7           | Load balancer                           | Write a function that resolves the fastest of two Promises.                                                    | `7-load_balancer.js`        |
| 8           | Throw an error                          | Create a function `divideFunction` that throws an error if division by 0 is attempted.                         | `8-try.js`                  |
| 9           | Throw error / try catch                 | Create a function `guardrail` that always logs a final message, whether an error occurs or not.                 | `9-try.js`                  |

## Author
This project was completed as part of the Holberton School curriculum by **Jean-Paul Dijeont**.