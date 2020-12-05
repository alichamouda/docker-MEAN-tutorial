var express = require('express');
var log = require('morgan')('dev');
var bodyParser = require('body-parser');
var properties = require('./config/properties');
var db = require('./config/database');
var cors = require('cors')
//hero routes
var feedbackRoutes = require('./api/feedback/feedback.routes');
var app = express();

//configure bodyparser
var bodyParserJSON = bodyParser.json();
var bodyParserURLEncoded = bodyParser.urlencoded({ extended: true });

//initialise express router
var router = express.Router();

// call the database connectivity function
db();

// configure app.use()
app.use(log);
app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);


// use express router

app.use('/api',cors({origin:'*'}), router);
feedbackRoutes(router);

app.get('/',cors({origin:'*'}), (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Access-Control-Allow-Origin');
    res.send('hello world');
});
app.options('/', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Access-Control-Allow-Origin');
    res.send('hello world');
});

// intialise server
app.listen(properties.PORT, (req, res) => {
    console.log(`Server is running on ${properties.PORT} port.`);
})