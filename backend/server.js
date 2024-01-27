const express = require('express');
const app = express()
const port = process.env.PORT || 4000
const db = require("./models")
const cors = require('cors');
app.use(cors({
    orgin:"http://localhost:4000/"
}))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/api/user',require('./routes/User'))
app.use('/api/admin',require('./routes/Admin'))



















db.sequelize.sync().then((req)=>{
app.listen(port,()=>{
    console.log(`App listenting on Port ${port}`);
})
})