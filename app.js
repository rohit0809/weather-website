const ck = require('chalk')
const yarg = require('yargs')
const notes =  require('./notes.js')

console.log(ck.red.bold('Error!'))

yarg.command({
    command: 'add',
    describe: 'Adding a note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        console.log('Adding the note....')
        notes.addNote(argv.title,argv.body)
    }
})

yarg.command({
    command: 'remove',
    describe: 'Removing a note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: false,
            type: 'string'
        }
    },
    handler(argv){
        console.log('Removing the note....')
        notes.removeNote(argv.title)
    }
})

yarg.command({
    command: 'list',
    describe: 'Listing the notes',
    handler(){
        console.log('Listing the notes....')
    }
})

yarg.command({
    command: 'read',
    describe: 'Reading a note',
    handler(){
        console.log('Reading the notes....')
    }
})

yarg.parse()

