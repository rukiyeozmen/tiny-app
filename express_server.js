const express = require('express');
const app = express();
const port = 8080;

//set view engine for ejs
app.set('view engine', 'ejs');


const urlDatabase = {
  "b2xVn2": "http://www.lighthouselabs.ca",
  "9sm5xK": "http://www.google.com"
};

//create root route / returns hello on the / route
app.get('/', (req, res) => {
  res.send('Hello');
});

// creare route /urls.json to send the db to the /urls.json route
app.get('/urls.json', (req, res) => {
  res.json(urlDatabase);
});

//create route /hello returns html on /hello route
app.get('/hello', (req, res) => {
  res.send("<html><body>Hello <b>World</b></body></html>\n");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});