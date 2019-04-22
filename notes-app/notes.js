const fs = require('fs')
const chalk = require('chalk')
const getNotes = () => {
    return "Your notes are as follows....."
}

const addNote = (title,body) => {
    notes = loadNote()

    const duplicateNotes = notes.filter((note) => note.title === title)

    if(duplicateNotes.length == 0){
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
    removeNote: removeNote
} 