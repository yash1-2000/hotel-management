const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async ()=>{
    try {
      await mongoose.connect(process.env.DB_CONN, {useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex:true});
      console.log('database connected')
    }catch(err){
        console.log(err.message)
        // exit process with failure
        process.exit(1);
    }
}

module.exports = connectDB;