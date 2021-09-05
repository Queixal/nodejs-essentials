//load express server function
const express = require('express')
//launch express server
const app = express()

//get will forward servlet name to the servlet function (rquest and response as parameters)
//app.com
app.get('', (req, res) => {
    res.send('Hello express')
})

//app.com/help
app.get('/help', (req, res) => {
    res.send('Help page')
})

//app.com/about
app.get('/about', (req, res) => {
    res.status(500).send('Page unavailable!');
})

//app.com/about
app.get('/weather', (req, res) => {
    res.send('Weather page')
})

//tells server where to listen and adding a function for the event "up and running"
app.listen(3000, () => {
    console.log("Server is up on port 3000")
})