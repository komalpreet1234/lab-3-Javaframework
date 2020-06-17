const express = require('express');
const app = express();

const path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const routes = require('./routes.js');
app.use('/', routes);

// Start our server
app.listen(process.env.PORT || 3000, () => console.log(`Listening on port 3000`));