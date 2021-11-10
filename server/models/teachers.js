var mongoose = require('mongoose');

var TeachersSchema = new mongoose.Schema({
    id: String,
    teaId: String,
    teaName: String,
    teaAddress: String,
    teaPhNo: String,
    teaSubjects: String
});

module.exports = mongoose.model('Teachers', TeachersSchema);