const express = require('express');
const app = express();
const port = 8080;

//set view engine for ejs, tells the Express app to use EJS as its templating engine
app.set('view engine', 'ejs');

// middleware which translates, parses the body of POST in <form>, makes it readable into string. Adds data to req.body 
app.use(express.urlencoded({ extended: true }));

const urlDatabase = {
  "b2xVn2": "http://www.lighthouselabs.ca",
  "9sm5xK": "http://www.google.com"
};

//create sroot route '/' returns hello on the / route
app.get('/', (req, res) => {
  res.send('Hello');
});

// creates '/urls' route passing url data to 'urls_index 'template, When sending variables to an EJS template, we need to send them inside an object, even if we are only sending one variable. This is so we can use the key of that variable (in the below case the key is urls) to access the data within our template.
app.get('/urls', (req, res) => {
  const templateVars = {
    urls: urlDatabase
  };
  res.render('urls_index', templateVars);
});

// creates '/urls' route to receive form submission and adds the name='longURL' into req.body as object
app.post('/urls', (req, res) => {
  console.log("req.body: ", req.body);
  res.send('Ok');
});

//creates 'urls/new' route where urls_new page will be display
app.get('/urls/new', (req, res) => {
  res.render('urls_new');
});


// creates '/urls/:id' routes where :id is the shortURL
app.get('/urls/:id', (req, res) => {
  const templateVars = {
    id: req.params.id,
    longURL: urlDatabase[req.params.id]
  };
  res.render('urls_show', templateVars);
});




app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});


//! I just put it outside to prevent confusion
// create route '/urls.json' to send the db to the '/urls.json' route
// app.get('/urls.json', (req, res) => {
//   res.json(urlDatabase);
// });

//create route '/hello' returns html on /hello route
// app.get('/hello', (req, res) => {
//   res.send("<html><body>Hello <b>World</b></body></html>\n");
// });