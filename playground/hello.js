const utils = require("../notes-app/src/utils.js")
const notes = require("../notes-app/src/notes.js")

notes.append('This file was created by Node.js!', './resources','notes.txt')

console.log(`prova#hotmal.com is valid email? ${utils.isValidEmail('prova#hotmal.com')}`)
console.log(`prova@hotmal.com is valid email? ${utils.isValidEmail('prova@hotmal.com')}`)