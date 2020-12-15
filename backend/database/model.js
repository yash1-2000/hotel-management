const mongoose = require('mongoose')
const HotelSchema = new mongoose.Schema(
    {
      table_id:{
        type:Number,
        // required:true
      },
       people:{
           type:Number,
           required:true
       },
       CustomerName:{
           type:String,
       },
       booked:{
           type:Boolean,
       }
    }
)
module.exports = Hotel = mongoose.model('Hotel', HotelSchema )