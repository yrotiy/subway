const express = require('express');
const app = express();

// middleware
const fs = require('fs');
const path = require('path');

// SUB MENU 01
const root = require('./routes/root');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// MVC
app.use('/', root);

app.get('/*', (req, res) => {
      res.send('NOT YET READY');
})

app.listen(3000, () => {
      console.log('APP LISTENING', 3000);
})