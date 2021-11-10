var mongoose = require('mongoose');

var StudentsSchema = new mongoose.Schema({
    id: String,
    rollNo: String,
    stdName: String,
    stdAddress: String,
    stdPhNo: String,
    stdClass: String
});

module.exports = mongoose.model('Students', StudentsSchema);