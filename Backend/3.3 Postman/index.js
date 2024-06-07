import express from 'express'
const app = express()
const port = 3000

app.get("/", (req, res) => {
    res.send("<h1>This is home page</h1>")
})

app.post("/about", (req, res) => {
    // do something
    res.sendStatus(201)
})

app.put("/user/onkar", (req, res) => {
    // do something
    res.sendStatus(200)
})

app.patch("/user/onkar", (req, res) => {
    // do something
    res.sendStatus(200)
})

app.delete("/user/onkar", (req, res) => {
    // delete user
    res.sendStatus(200)
})

app.listen(port, () => {
    console.log(`Server started at port ${port}`);
})