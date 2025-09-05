const express = require('express')
const mongoose = require('mongoose')
const userRoutes = require("./routes/user_route")
require('dotenv').config();


const app = express()
const PORT = process.env.PORT || 3030

mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>console.log("MongoDB connected"))
  .catch((err)=>console.error("MongoDB connection error:", err))

app.use(express.json())
app.use('/api/users', userRoutes)

app.listen(PORT, ()=>{
    console.log(`Server running port ${PORT}`)
})