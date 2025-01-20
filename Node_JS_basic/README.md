# NodeJS Basics

## Description

This project introduces the basics of **Node.js** through progressive tasks. You'll learn essential concepts such as working with Node.js modules, creating HTTP servers, handling files, and using frameworks like **Express.js**.

---

## Requirements

- **Node.js** (version 20.x.x)
- **npm** (Node Package Manager)
- Operating System: **Ubuntu 20.04 LTS**

---

## Project Structure


Node_JS_basic/ 
├── 0-console.js
├── 1-stdin.js
├── 2-read_file.js
├── 3-read_file_async.js
├── 4-http.js
├── 5-http.js
├── 6-http_express.js
├── 7-http_express.js 
├── full_server/ │ 
├── controllers/ │ │ ├── AppController.js │ │ ├── StudentsController.js │ ├── routes/ │ │ ├── index.js │ ├── utils.js │ ├── server.js
├── database.csv
├── package.json
├── babel.config.js
├── .eslintrc.js
└── README.md


---

## Learning Objectives

By the end of this project, you should be able to:

1. Run JavaScript using **Node.js**.
2. Use Node.js modules to structure and organize code.
3. Read and write files with Node.js.
4. Create simple and complex HTTP servers using Node.js.
5. Utilize **Express.js** for efficient server creation.
6. Organize a Node.js project using multiple files and modules.
7. Use tools like **ESLint**, **Babel**, and **Nodemon** to enhance the development process.

---

## File Descriptions

### **Main Files**
- **`0-console.js`**: A function that prints a message to the terminal.
- **`1-stdin.js`**: An interactive program that reads user input and displays personalized messages.
- **`2-read_file.js`**: A script to synchronously read a CSV file and display student data.
- **`3-read_file_async.js`**: An asynchronous version of `2-read_file.js` that uses Promises.
- **`4-http.js`**: A simple HTTP server using the built-in `http` module.
- **`5-http.js`**: A more complex HTTP server with routes to display student information.
- **`6-http_express.js`**: A basic HTTP server built with **Express.js**.
- **`7-http_express.js`**: A more advanced HTTP server with Express.js, handling routes and displaying student details.

### **Full Server**
The `full_server/` directory organizes the server into multiple files:

- **`utils.js`**:
  - Contains the `readDatabase` function to read and parse the CSV file asynchronously.
- **`controllers/`**:
  - **`AppController.js`**: Handles the homepage route.
  - **`StudentsController.js`**: Handles student-related routes, such as displaying all students or filtering by major.
- **`routes/`**:
  - **`index.js`**: Maps routes to their corresponding controllers.
- **`server.js`**:
  - The main entry point of the server that ties everything together.

### **Other Files**
- **`database.csv`**: A sample CSV file containing student data.
- **`package.json`**: Defines project dependencies and scripts.
- **`babel.config.js`**: Configuration for Babel to support ES6+ syntax.
- **`.eslintrc.js`**: Configuration for ESLint to enforce coding standards.

---

## Usage

### **Setup**
1. Clone the repository:
   ```bash
   git clone https://github.com/weebaay/holbertonschool-web_back_end.git
   cd holbertonschool-web_back_end/Node_JS_basic

	Install dependencies:

    	npm install

**Running Specific Tasks**

Each task can be executed separately. For example:

    Run 1-stdin.js:

	node 1-stdin.js

**Start the full server:**

    npm run dev

**Testing**

    Run all tests:

	npm run test

**Fix linting issues:**

    npx eslint . --ext .js --fix

## Tools Used

**Node.js:** JavaScript runtime for building server-side applications.


**Express.js:** Web framework for creating robust APIs and web servers
.

**ESLint:** Tool for identifying and fixing coding style issues.


**Babel:** JavaScript compiler for using modern ES6+ syntax.


**Nodemon:** Utility for restarting the server automatically during development.


## Author

**Jean-Paul Dijeont**
