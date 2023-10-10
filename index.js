

const express = require("express")

const port = 3001;

const app = express()
const data = [{
    "what is Express js": "Express.js, often referred to simply as Express, is a popular and widely-used web application framework for Node.js. It provides a set of features and tools for building web and mobile applications, particularly web servers and APIs (Application Programming Interfaces). Express.js simplifies the process of building robust and scalable web applications in Node.js by offering a minimalistic and flexible structure.",
    "Its Features": {
        "1": "Routing: Express allows you to define routes that map HTTP methods (GET, POST, PUT, DELETE, etc.) to specific URL patterns. This makes it easy to handle different types of requests and create RESTful APIs.",
        "2": "Middleware: Middleware functions in Express provide a way to execute code in a request-response cycle. They can be used for tasks like authentication, logging, data parsing, and error handling. Middleware functions can be organized in a pipeline and executed in a specific order.",
        "3": "Templating: Although Express itself doesn't include a template engine, it's easy to integrate popular template engines like Pug, EJS, or Handlebars for rendering dynamic HTML views.",
        "4": "Static Files: You can serve static files such as images, stylesheets, and client-side JavaScript using Express's built-in middleware for this purpose.",
        "5": "Database Integration: Express can work with various databases and data storage solutions. It's often used in conjunction with databases like MongoDB, MySQL, or PostgreSQL through appropriate Node.js libraries or Object-Relational Mapping (ORM) tools.",
    }
}]
app.get("/About", (req, res) => {
    res.send(data)
})

app.get("/", (req, res) => {
    res.send("Hello Dear  :-you wants to se the data go to About page")
})

app.listen(port, () => {
    console.log("fine runnig on ", port);
})