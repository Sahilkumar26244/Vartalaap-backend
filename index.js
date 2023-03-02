const express = require('express');
const connectDB = require('./database/db')
const app = express();
const route = require('./routes/route.js');
const cors = require('cors');



connectDB()
app.use(cors());
app.use(express.json());


app.use('/' , route)
const PORT = 8000;


app.listen(PORT , () => {
    console.log("server running!")
})