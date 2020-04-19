const db = require('./database');
const app = require('./server');
const bodyParser = require('body-parser');
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', 'views');

const symptomsRouter = require('./routes/symptoms');
const statsRouter = require('./routes/stats');

app.use(bodyParser.urlencoded({extended: false}));

app.use(symptomsRouter);
app.use(statsRouter);

// app.use((req, res, next) => {
//     res.status(404).render('404', {pageTitle : 'Not Found'});
// });


app.listen(process.env.port || 4000, function() {
    console.log('Server Started!');
});