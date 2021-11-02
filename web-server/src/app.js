//load PATH module to evaluate paths
const path = require('path')
//load express server function
const express = require('express')
//launch express server
const app = express()
//store where templates folder is
const viewsPath = path.join(__dirname, '../templates')
//store where static fields are stored in
const staticPath = path.join(__dirname, '../public')

//setup  handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)

//global variables from node
console.log("Node __dirname: " + __dirname)
console.log("Node __filename: " +__filename)
console.log("Path join(): " +path.join())
console.log("Path join(__dirname): " +path.join(__dirname))
console.log("Path join(__dirname, '..'): " +path.join(__dirname, '..'))
console.log("Path join(__dirname, '../public'): " +path.join(__dirname, '../public'))

//tell server to use static context from this path
app.use(express.static(staticPath))

//render views/index.hbs template at the root of the app
//app.com 
app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Queixal'
    })
})

//app.com/help
app.get('/help', (req, res) => {
    let email = 'mmi.developer@gmail.com';
    res.render('help', {
        title: 'Help',
        email: email,
        message: `Contact to ${email} for more help`
    })
})

//app.com/about
app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About us',
        image: {src: 'img/robot.png', alt:"a robots face"}
    })
})

//app.com/about
app.get('/weather', (req, res) => {
    res.send({
        forecast: 'test',
        location: "barcelona"
    })
})

//tells server where to listen and adding a function for the event "up and running"
app.listen(3000, () => {
    console.log("Server is up on port 3000")
})