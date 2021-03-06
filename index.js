//import express
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
//create server
const app = express();

//connect DB
connectDB();

//enable cors
app.use(cors({ credentials: true, origin: true }));
app.options("*", cors());

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