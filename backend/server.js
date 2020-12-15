const express = require("express")
const connectDB = require("./database/config")

connectDB()

const app = express()
app.use(express.urlencoded({extended:false}));
app.use(express.json({extended:false}));


app.use('/api/table', require('./routes/api/table'));

app.get("/",async (req,res)=>{
  res.send('homepage')
})

app.listen(5000,()=>{
    console.log("listining")
})