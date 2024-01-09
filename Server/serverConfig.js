const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = 2000;

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/', function (req, res) {
  res.send('Express Node Work, Succesfully!');
});

app.listen(PORT, function () {
  console.log('You are listen to port:', PORT);
});


app.post('/registerForm', function (req, res) {
  console.log(req.body);
  res.status(200).send({ "data": "recived succesfully!" })
});


