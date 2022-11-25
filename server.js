const express = require('express')
const app = express()
const port = 3000;

app.use(express.static("."));

app.get((req, res) => {
    res.sendFile(".\\index.html")
 })
 
 app.listen(port, () => console.info(`Server running on ${port}`))