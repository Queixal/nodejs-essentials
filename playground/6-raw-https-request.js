const https = require('http');

function getWeather(place, callback) {
    const url = `http://api.weatherstack.com/current?access_key=444d234c7b3e1fa3dd28e0bd63d860cd&query=${place}`
    const options = { url: url, json: true }
    
    const request = https.request(url, (response) => {

        let data = '';
        //this event will be fired when date comes from the server, this is not when all data is in the client
        response.on('data', (chunk) => {
            console.log(chunk)
            data += chunk;
        })

        //this event will be called when all chunks where downloaded
        response.on('end', () => {
            const body =  JSON.parse(data);
            //depends of the API, the success is inside the API respone
            if (body.success == undefined) {
                callback(undefined, body )
            } else {
                callback(body.error)
            }
        })

    })
    //this event will be called when something fail in the request
    request.on('error', (error) => {
        callback(error) 
    })
    //we need to tell request library when we are ready to end the definition of the request in order to launch it
    request.end() 
}

getWeather('Barcelona', (error = {}, data= {}) =>{
    console.log(error)
    console.log(data)
})