//import express
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
//create server
const app = express();

//connect DB
connectDB();

//enable cors
// Add headers before the routes are defined
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

//enable express.json
app.use(express.json({ extended: true }));

//create port if there is no variable, assign 4000 by default.
const PORT = process.env.PORT || 4000;

//import routes
app.use('/api/products', require('./routes/products'));
app.use('/api/shelfbackup', require('./routes/shelfbackup'));

//start app
app.listen(PORT, ()=> {
    console.log(`The server is currently working on the port: ${PORT}`);
})



