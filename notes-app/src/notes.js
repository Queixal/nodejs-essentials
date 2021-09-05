//load file system module using common js
const fs = require("fs")
const chalk = require('chalk');

const config = {
  datasource: 'resources/notes-datawarehouse.json'
}

let append = (text, folder, file) => {
  let path = folder + "/" + file;
  //try to retrieve the info from the folder and send the callback function
  fs.stat(folder, (err, stats) => {
    //check if the we have any info of the folder, if the info is null, the folder doesnt exist
    if (!stats) {
      console.log(`Folder not exist, making: ${folder}`);
      //we will call mkdir syncronously because we will need this file created before calling append file
      //we are not calling append file sync inside the callback because maybe the folder already exist
      fs.mkdirSync(folder, { recursive: true }, (err) => {
        if (err) throw err;
      });
    }
    //write inside resources/notes.txt file the text in the second parameter
    fs.appendFileSync(path, text);
  });
}

const loadNotes = () => {
  try {
    return JSON.parse(fs.readFileSync(config.datasource))
  } catch (e) {
    return []
  }
}

const flushNotes = (notes) => {
  try {
    fs.writeFileSync(config.datasource, notes)
  } catch (e) {
    console.error(e)
  }
}

const notesManager = {
  append(text, folder, file) {
    append(text, folder, file)
  },
  get(title) {
     let results = loadNotes().filter(element => element.title == title)
     return results.length > 0 ? results[0] : null
  },
  list() {return loadNotes()},
  add(title, body)  {
    let currentNotes = loadNotes()
    let duplicateds = currentNotes.filter((note) => note.title == title)
    debugger
    if (duplicateds.length == 0) {
      currentNotes.push({ title, body })
      flushNotes(JSON.stringify(currentNotes))
      console.log(chalk.green.inverse('Note saved with title: '), title)
    } else {
      console.error(chalk.red.inverse("Duplicated note with title: "), title)
    }
  },
  remove(title) {
    let currentNotes = loadNotes()
    let notesWithoutThisTitle = currentNotes.filter((note) =>  note.title != title)
    if (currentNotes.length == notesWithoutThisTitle.length) {
      console.log(chalk.red.inverse('No note found!'))
    } else {
      flushNotes(JSON.stringify(notesWithoutThisTitle))
      console.log(chalk.green.inverse('Note removed!'))
    }
  }
}

module.exports = { ...notesManager }