const express = require('express');

const app = express();
const routes = require('./routes.js');

app.use(routes);

app.listen(3000 , () => console.log('Server is running on http://localhost:3000'));