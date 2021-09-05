//load file system module using common js
const notes = require('./src/notes.js')
const utils = require('./src/utils.js')
const chalk = require('chalk');
const log = console.log;
const yargs = require('yargs/yargs')(process.argv.slice(2))
    .command({
        command: 'add',
        describe: 'Adds a new note',
        builder: {
            title : {
                describe : 'Note title',
                demandOption : true,
                type: 'string'
            },
            body : {
                describe : 'Note body',
                demandOption : true,
                type: 'string'
            },
        },
        handler(argv) {
            notes.add(argv.title, argv.body)
        }
    })
    .command({
        command: 'remove',
        describe: 'Removes a note',
        builder: {
            title : {
                describe : 'Note title',
                demandOption : true,
                type: 'string'
            }
        },
        handler(argv) {
            log('Note title: ', argv.title)
            notes.remove(argv.title)
        }
    })
    .command({
        command: 'read',
        describe: 'Reads a single note by id',builder: {
            title : {
                describe : 'Note title',
                demandOption : true,
                type: 'string'
            }
        },
        handler(argv) {
            log(chalk.grey.inverse("Retrieve note with title: "), argv.title)
            let note = notes.get(argv.title)
            if (note == null) {
                log(chalk.red.inverse('Note not found'))
            } else {
                log(note)
            }
        }
    })
    .command({
        command: 'list',
        describe: 'Retrieves all notes',
        builder(yargs) {yargs.default('value', 'true')},
        handler(argv) {
            log(chalk.grey.inverse("Your notes: "))
            notes.list().forEach(element => log(element.title))
        }
    })
    .version("0.1.0")
    .help()
    .wrap(72)
    
yargs.parse()
