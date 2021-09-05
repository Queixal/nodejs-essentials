const request = require('postman-request');


function getWeather(place, callback) {
    const url = `http://api.weatherstack.com/current?access_key=444d234c7b3e1fa3dd28e0bd63d860cd&query=${place}`
    const options = { url: url, json: true }
    
    request(options, function (error, response, body) {
        //error is only for HTTP response codes
        if (error) {
            callback(error) 
        } else {
            //depends of the API, the success is inside the API respone
            if (body.success == undefined) {
                callback(undefined, body )
            } else {
                callback(body.error)
            }
        }
    });
}

getWeather('Barcelona', (error, data) =>{
    console.log(error)
    console.log(data)
})