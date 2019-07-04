const mongoose = require('mongoose');
const http = require('http');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// connect db
mongoose.connect(
  'mongodb://localhost:27017/demo',
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

// set enviroments
app.set('port', process.env.PORT || 3000);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// set routes
app.get('/', function (req, res) {
  res.send('Main Page');
});

app.use('/item', require('./routes/item'));


// error handling middleware
app.use(function (err, req, res, next) {
  console.log(err);
  res.send({error: err.message});
});



// listen
http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get( 'port'));
});
