const fs = require('fs')
const chalk = require('chalk')
const getNotes = () => {
    return "Your notes are as follows....."
}

const addNote = (title,body) => {
    notes = loadNote()

    //const duplicateNotes = notes.filter((note) => note.title === title)
    const duplicateNote = notes.find((note) => note.title === title)

    if(!duplicateNotes){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('New Note Added!!')
    }
    else{
        console.log('Note with title '+title+' already exist !!')
    }
}

const removeNote = (title) => {
    notes = loadNote()

    const NotestoRetain = notes.filter((note) => note.title !== title)

    if(NotestoRetain.length != notes.length){
        saveNotes(NotestoRetain)
        console.log(chalk.green('Note with title '+title+' is removed'))
    }
    else{
        console.log(chalk.red('No Note found'))
    }
    
}

const listNote = () => {
    notes = loadNote()
    notes.forEach(element => {
        console.log(chalk.green.bold('Title is: '+element.title))
        console.log(chalk.red.bold('Body is: '+element.body))
    });
}

const readNote = (title) => {
    notes = loadNote()
    const toread = notes.find((note) => note.title === title)

    if(toread){
        console.log(chalk.yellow.bold('Note Found!!!'))
        console.log(chalk.blue('Title is '+toread.title))
        console.log(chalk.green('Body is '+ toread.body))
    }
    else{
        console.log(chalk.yellow.bold('No matching Note Found!!!'))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

const loadNote = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch(e){
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNote: listNote,
    readNote: readNote
} 