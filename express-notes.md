# EXPRESS notes

# Setup

Load express as a method constant and later on call that methos to retrieve the server:
```
//load express server function
const express = require('express')
//launch express server
const app = express()
```

After the main configurations, wake up the server in the selected port:
```
app.listen(3000, () => {
    console.log("Server is up on port 3000")
})
```

Tell server to use static context, so using localhost:3000/_files_ we can access to all files inside staticPath
```
app.use(express.static(staticPath))
```

# Basic Examples
Return html as a reponse:
```
 app.get('', (req, res) => {
    res.send('<h1>Hello express</h1>')
})
```
Return objects as a response:

```
//app.com/help
app.get('/help', (req, res) => {
    res.send({
        name : 'Queixal',
        age: 29
    })
})

app.get('/helpArray', (req, res) => {
    res.send([{
        name : 'Queixal',
        age: 29
    }, {
        name : 'Styx',
        age: 32
    }])
})
```

Return static html file for a request
```
//app.com/about
app.get('/about', (req, res) => {
    res.sendFile(path.join(staticPath, "about.html"));
})
```

The templates must be defined under views direcotry and must be called using "render methos with the name of the template without the file format
```
app.get('', (req, res) => {
    res.render('index')
})
```

In order to pass arguments or variables you can pass a json to render method:

```
#App.js
app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Queixal'
    })
})

#index.hbs
<h1>{{title}}</h1> 
<p>Created by {{name}}</p>
```
