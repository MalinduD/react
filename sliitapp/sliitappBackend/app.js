const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors');
let mongoose = require('mongoose');
let config = require('./config/database');
let bodyParser = require('body-parser');
let flash = require('express-flash-messages');
let session = require('express-session');
app.use(flash());

//let fileUpload  = require('express-fileupload');
app.use(cors());
app.use(bodyParser());

//Connect to db
mongoose.connect(config.database, {useNewUrlParser: true});

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Connected to MongoDB');
});

//Express Session Middleware
app.set('trust proxy', 1); // trust first proxy
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true,
}));

let coursesRoute = require('./routes/backend_addcourse');
app.use('/AddCourse',coursesRoute);

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));