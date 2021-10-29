const express = require("express")
const router = express.Router()
const Note = require("../models/noteModel")

router.route("/create").post((req, res) => {
    const title = req.body.title
    const content = req.body.content
    const newNote = new Note({
        title,
        content
    })
    newNote.save()
})

module.exports = router

// https://youtu.be/nUbNn0voiBI?t=1811 last part