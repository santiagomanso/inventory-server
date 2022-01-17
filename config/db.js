const mongoose = require('mongoose');
require('dotenv').config({path:'variables.env'});


//connect to mongoDB
const connectDB = async () =>{
try {

    await mongoose.connect(process.env.DB_MONGO, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("DB connected succesfully");

} catch (error) {
    console.log(error); 
    process.exit(1); //stop the app when there is an error
}
}

module.exports = connectDB;