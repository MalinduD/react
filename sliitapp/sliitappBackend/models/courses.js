let mongoose = require('mongoose');

let coursesSchema = mongoose.Schema({
    cName: {
        type: String,
        required: true
    },
    cCode: {
        type: String,
        required: true
    },
    cPassmarks: {
        type: String,
        required: true
    },
    cLecture: {
        type: String,
        required: true
    }
});

let Courses = module.exports = mongoose.model('Courses', coursesSchema );