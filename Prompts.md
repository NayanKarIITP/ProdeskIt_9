# Prompts.md

## AI Usage Declaration

This project **"The Data Hub – REST API Server"** was mainly implemented independently by **Nayan Kar(me)**.

Most of the development work including:

* Project setup
* Express server configuration
* CRUD API routes
* Mock database implementation using arrays
* Postman testing
* Debugging request handling
* Middleware integration

was written and tested manually.

AI assistance was used only occasionally for **small clarifications, best practices, and documentation formatting**.

Overall, **the majority of the implementation (around 80–90%) was completed independently**, while AI was used as a learning support tool.

---

# Prompts Used During Development

### 1. Express Server Initialization

Prompt:
How to set up a basic Express.js server with JSON middleware and run it on port 5000?

Reason:
To verify the standard structure of an Express application.

---

### 2. Designing REST API Routes

Prompt:
What is the typical structure of REST API routes in Express for a blog CRUD system?

Reason:
To confirm route patterns such as GET /posts, POST /posts, PUT /posts/:id, and DELETE /posts/:id.

---

### 3. Middleware Logging

Prompt:
How to create a custom middleware in Express that logs request method, URL, and timestamp?

Reason:
To implement request monitoring and better understand middleware flow.

---

### 4. Mock Authentication Example

Prompt:
How to generate a simple JWT token in Node.js using jsonwebtoken?

Reason:
To simulate authentication functionality for demonstration purposes.

---

### 5. Documentation Support

Prompt:
How to structure a README file for a Node.js REST API project on GitHub?

Reason:
To improve project documentation and clarity for reviewers.

---

# Development Process

The development process involved:

1. Initializing the Node.js project using npm.
2. Installing required packages such as Express and jsonwebtoken.
3. Building the Express server and defining API endpoints.
4. Implementing CRUD operations using an in-memory array as a mock database.
5. Testing endpoints using Postman.
6. Adding middleware to log incoming requests.
7. Creating a mock authentication route that returns a JWT token.
8. Documenting the project for submission.

---

# Author

Nayan Kar
