const mongoose = require('mongoose');
const mongooseURL = require('./databases/mongooseDB');
const redidDB = require('./databases/redis_database');
const app = require('./server');
const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', 'views');

const symptomsRoute = require('./routes/symptoms');
const statsRoute = require('./routes/stats');
const authRoute = require('./routes/admin/auth');
const adminRoute = require('./routes/admin/adminRoute');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname + '/public')));

app.use(symptomsRoute);
app.use(statsRoute);
app.use('/admin', authRoute);
app.use('/admin', adminRoute);

// app.use((req, res, next) => {
//     res.status(404).render('404', {pageTitle : 'Not Found'});
// });

mongoose.connect(
    mongooseURL,
{
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
.then(result => {
    app.listen(process.env.port || 4000, function() {
        console.log('Server Started!');
    });
    console.log("Connected to the Mongoose database!");
})
.catch(err => {
    console.log(err);
});
