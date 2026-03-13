# The Data Hub – REST API Server

## Project Overview

The Data Hub is a simple REST API server built using **Node.js and Express.js**.
This project demonstrates how backend servers handle HTTP requests and return JSON responses.

The API allows users to perform **CRUD operations (Create, Read, Update, Delete)** on blog posts using REST endpoints.

This project was developed as part of the **Fullstack Developer Track B assignment**.

---

# Tech Stack

* Node.js
* Express.js
* JSON Web Token (JWT)
* Postman (for API testing)

---

# Features

### Level 1

* Express server setup
* REST API routes for blog posts

### Level 2

* Mock database using an array
* Full CRUD operations
* Postman API testing

### Level 3

* Custom logging middleware
* Fake authentication with JWT
* Timestamp logging for each request

---

# Project Structure

data-hub
│
├── node_modules
├── package.json
├── server.js
├── README.md
└── Prompts.md

---

# Installation

Clone the repository

git clone https://github.com/NayanKarIITP/Prodeskit_9.git

Navigate to the project folder

cd data-hub

Install dependencies

npm install

Run the server

node server.js

Server runs at:

http://localhost:5000

---

# API Endpoints

## Get All Posts

GET /posts

Returns all blog posts.

---

## Get Post By ID

GET /posts/:id

Returns a single blog post by ID.

---

## Create Post

POST /posts

Example Body:

{
"title": "My First Blog",
"content": "This is my first post"
}

---

## Update Post

PUT /posts/:id

Example Body:

{
"title": "Updated Title",
"content": "Updated Content"
}

---

## Delete Post

DELETE /posts/:id

Deletes a blog post by ID.

---

## Login (Fake Authentication)

POST /login

Example Body:

{
"username": "admin",
"password": "1234"
}

Returns a mock JWT token.

---

# Middleware

A custom middleware logs each request in the console.

Example:

[GET] /posts - 10:05 AM

---

# Testing

API endpoints were tested using **Postman / Thunder Client**.

---

# Demo

The demo video shows:

• Running the server
• Creating a blog post
• Viewing blog posts
• Deleting a blog post
• Fake authentication with JWT

---

# Author

Nayan Kar
