
const mongoose = require('mongoose')

// "title": "title 1",
// "coverimg": "https://loremflickr.com/640/480/cats",
// "desc": "desc 1",
// "link": "https://loremflickr.com/640/480",

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true
    },
    coverimg: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: false,
    },
   



})

const Projects = mongoose.model("Projects", projectSchema)
module.exports = Projects;