const express = require("express")
const jwt = require("jsonwebtoken")
const cors = require("cors")

const app = express()

app.use(express.json())
app.use(cors())

const PORT = 5000

// Mock Database
let blogPosts = []


// Custom Middleware

function logger(req, res, next) {

    const method = req.method
    const url = req.url
    const time = new Date().toLocaleTimeString()

    console.log(`[${method}] ${url} - ${time}`)

    next()
}

app.use(logger)


// Blog Routes

// GET all posts
app.get("/posts", (req, res) => {

    res.json(blogPosts)

})


// GET post by ID
app.get("/posts/:id", (req, res) => {

    const id = parseInt(req.params.id)

    const post = blogPosts.find(p => p.id === id)

    if (!post) {
        return res.status(404).json({ message: "Post not found" })
    }

    res.json(post)

})


// POST create new post
app.post("/posts", (req, res) => {

    const { title, content } = req.body

    const newPost = {
        id: blogPosts.length + 1,
        title,
        content
    }

    blogPosts.push(newPost)

    res.json({
        message: "Post added successfully",
        post: newPost
    })

})


// PUT update post
app.put("/posts/:id", (req, res) => {

    const id = parseInt(req.params.id)

    const { title, content } = req.body

    const post = blogPosts.find(p => p.id === id)

    if (!post) {
        return res.status(404).json({ message: "Post not found" })
    }

    post.title = title
    post.content = content

    res.json({
        message: "Post updated",
        post
    })

})


// DELETE post
app.delete("/posts/:id", (req, res) => {

    const id = parseInt(req.params.id)

    blogPosts = blogPosts.filter(p => p.id !== id)

    res.json({
        message: "Post deleted"
    })

})


// Fake Login Route

app.post("/login", (req, res) => {

    const { username, password } = req.body

    if (username === "admin" && password === "1234") {

        const token = jwt.sign(
            { username: username },
            "secretkey",
            { expiresIn: "1h" }
        )

        return res.json({
            message: "Login successful",
            token: token
        })

    }

    res.status(401).json({
        message: "Invalid credentials"
    })

})



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})