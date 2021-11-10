var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var mongoose = require('mongoose');
var Students = require('./models/students');
var Teachers = require('./models/teachers');
var Subjects = require('./models/subjects');

mongoose.connect('mongodb://localhost/school', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Connected to mongodb successful')).catch((err) => console.error(err));

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/getstudents', (req, res) => {
    Students.find(function(err, students) {
        if (err)
            return next(err);



        res.json(students);
    });
});

app.get('/getteachers', (req, res) => {
    Teachers.find(function(err, teachers) {
        if (err)
            return next(err);



        res.json(teachers);
    });
});

app.get('/getsubjects', (req, res) => {
    Subjects.find(function(err, subjects) {
        if (err)
            return next(err);



        res.json(subjects);
    });
});

app.post('/poststudents', (req, res, next) => {
    Students.create(req.body, function(err, students) {
        if (err) {
            console.log(err);
            return next(err);
        }

        res.json(students);
    });
});

app.post('/postteachers', (req, res, next) => {
    Teachers.create(req.body, function(err, teachers) {
        if (err) {
            console.log(err);
            return next(err);
        }

        res.json(teachers);
    });
});

app.post('/postsubjects', (req, res, next) => {
    Subjects.create(req.body, function(err, subjects) {
        if (err) {
            console.log(err);
            return next(err);
        }

        res.json(subjects);
    });
});


app.listen(4000, () => {
    console.log("Server is running");
});

module.exports = app;