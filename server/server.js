const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');

//create a db connection  -> u can also
//create a sepatate file for this and then import/use tht file here

mongoose.connect('mongodb+srv://mutailee361:mutailee361%402024@cluster0.is3wb.mongodb.net/myDatabase?retryWrites=true&w=majority').then(()=>console.log('MongoDB connected')).catch(err=>console.log(err));


const app = express()
const PORT = process.env.PORT || 5000;

app.use(
    cors({
        origin: 'http://localhost:5173/',
        methods: ['GET', 'POST','PUT','DELETE'],
        allowedHeaders: [
            'Content-Type', 
            'Authorization',
            'Cache-Control',
            'Expires',
            'Pragma'
        ],
        credentials: true
    })
)

app.use(cookieParser());
app.use(express.json());

app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`));