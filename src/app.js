const express = require('express');
const app = express();

// middleware
const fs = require('fs');
const path = require('path');

const PORT = 3000;

const index = require('./routes/index');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// MVC
app.use('/', index);

app.get('/*', (req, res) => {
      res.send('NOT YET READY');
})

app.listen(PORT, () => {
      console.log('APP LISTENING 3000');
})