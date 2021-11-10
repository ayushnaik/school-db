var mongoose = require('mongoose');

var SubjectsSchema = new mongoose.Schema({
    id: String,
    subCode: String,
    subName: String,
    maxMarks: String,
    minMarks: String,
    subClass: String
});

module.exports = mongoose.model('Subjects', SubjectsSchema);