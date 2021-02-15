//load http module
const express = require('express');
const app = express();
const port = 8000;

//home route
app.get('/', (req, res) => {
  res.send('Hellow World!')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});