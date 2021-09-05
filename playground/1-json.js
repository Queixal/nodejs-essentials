const fs = require('fs')
const https = require('https');

//JavaScript Object
const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday'
}

//returns the json representation from a computed javascript object
console.log('JavaScript object: ', book)

const bookJSON = JSON.stringify(book)
console.log('JSON.stringify: ', bookJSON)

const bookParsed = JSON.parse(bookJSON)
console.log('JSON.parse: ', bookParsed)

console.log('Performing a fs.writeFileSync operation to create a file with the value: ', bookJSON)
fs.writeFileSync('resources/1-json.json', bookJSON)

console.log('Performing a fs.readFileSync operation to read previous file')
const dataBuffer = fs.readFileSync('resources/1-json.json')
console.log('fs.readFileSync returns a byte array: ', dataBuffer)

const dataJSON = JSON.parse(dataBuffer)
console.log('JSON.parse with a byte array: ', dataJSON)

const url = 'https://gist.githubusercontent.com/andrewjmead/c7d26a25ddc793f4210201747a9ba429/raw/37aa1fa2e2b721f395c2291476db2e5a45627be4/data.json'
console.log('Retrieving JSON from: ', url)

https.get(url, (res) => {
    //console.log('statusCode:', res.statusCode);
    //console.log('headers:', res.headers);
    res.setEncoding('utf8')
    res.on('data', (downloadedData) => {
        console.log('Data downloaded: ', downloadedData)     
        let dataJSON = JSON.parse(downloadedData)   
        let data = JSON.stringify(dataJSON) 
        console.log('Performing a fs.writeFileSync operation to create a file with the value: ', data)
        fs.writeFileSync('resources/1-json-downloaded-raw.json', data)
        dataJSON.name='Eren'
        data = JSON.stringify(dataJSON)  
        console.log('Performing a fs.writeFileSync operation to create a file with the value: ', data)
        fs.writeFileSync('resources/1-json-downloaded.json', data)
    });

}).on('error', (e) => {
    console.error(e);
});
