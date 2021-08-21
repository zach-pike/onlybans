const express = require("express")

const app = express()

app.get("/ban/:person", (req, res) => {
    res.send(`${req.params.person} has been banned!`)
})

app.get("/ban", (req, res) => {
    res.sendStatus(403)
})



app.listen(1337)