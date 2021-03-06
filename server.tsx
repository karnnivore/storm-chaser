//load http module
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('Cors');

const app = express();

var corsOptions = {
  origin: 'http://localhost:8081'
};

app.use(cors(corsOptions));

//parse requests of content-type - application/json 
app.use(bodyParser.json());

//parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//home route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to bezkoder application.' });
})

//set port, listen for requests
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})