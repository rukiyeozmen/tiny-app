const express = require('express');
const app = express();
const port = 8080;

//set view engine for ejs, tells the Express app to use EJS as its templating engine
app.set('view engine', 'ejs');


const urlDatabase = {
  "b2xVn2": "http://www.lighthouselabs.ca",
  "9sm5xK": "http://www.google.com"
};

//create root route '/' returns hello on the / route
app.get('/', (req, res) => {
  res.send('Hello');
});

// create '/urls' route passing url data to 'urls_index 'template, When sending variables to an EJS template, we need to send them inside an object, even if we are only sending one variable. This is so we can use the key of that variable (in the below case the key is urls) to access the data within our template.
app.get('/urls', (req, res) => {
  const templateVars = {
    urls: urlDatabase
  };
  res.render('urls_index', templateVars);
});

app.get('/urls/:id', (req, res) => {
  const templateVars = {
    id: req.params.id,
    longURL: urlDatabase[req.params.id]
  };
  res.render('urls_show', templateVars);
});


// creare route '/urls.json' to send the db to the '/urls.json' route
app.get('/urls.json', (req, res) => {
  res.json(urlDatabase);
});

//create route '/hello' returns html on /hello route
app.get('/hello', (req, res) => {
  res.send("<html><body>Hello <b>World</b></body></html>\n");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});