//load file system module using common js from node_modules folder (notice we are not using "./")
const validator = require("validator")
const chalk = require('chalk');


let isValidEmail = (email) => {
  return validator.isEmail(email)
}

module.exports = { isValidEmail, chalk }