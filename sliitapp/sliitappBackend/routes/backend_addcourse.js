let express = require('express');
let router = express.Router();
let bodyParser = require('body-parser');


router.use(bodyParser.urlencoded({
    extended: true
}));

let Courses = require('../models/courses');

router.post('/courses', function (req,res) {
    console.log('Add courses Post Called');
    console.log(req.body);

    let CName = req.body.cName;
    let CCode = req.body.cCode;
    let CPassmarks = req.body.cPassmarks;
    let CLecture = req.body.cLecture;
   

    let errors = req.validationErrors;

    if(errors) {
        console.log('errors reported in add courses post');
    } else {
        Courses.findOne({cName:CName}, function (err,allreadyCourse) {
            if(allreadyCourse) {
                console.log('Course Already added.');
                //    res.redirect('/Signin');
            } else {
                let newCourse = new Courses({
                    cName:CName,
                    cCode:CCode,
                    cPassmarks:CPassmarks,
                    cLecture:CLecture,
                });
                req.session.newCourse = newCourse._id;  
               
                newCourse.save(function (err) {
                    if(err) return console.log(err);
                    console.log('Course Successfully Added.');
                    //  res.redirect('/Signin');
                })
            }
        })
    }

});

module.exports = router;