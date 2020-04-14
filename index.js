const app = require('./server');
const bodyParser = require('body-parser');


const symptomsRouter = require('./routes/symptoms');
const statsRouter = require('./routes/stats');

app.use(bodyParser.urlencoded({extended: false}));

app.use(symptomsRouter);
app.use(statsRouter);

app.use((req, res, next) => {
    res.status(404).send();
});


app.listen(process.env.port || 4000, function() {
    console.log('Server Started!');
});