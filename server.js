const express = require('express');
const app = express();
// requare first API
const bodyParser = require('body-parser');
const dataBase = require('./dataBase');
const usersController = require('./controllers/users');
// requare new API
const mongoose = require('mongoose');
const config = require('config');

const PORT = config.get('port') || 5000

async function start() {
    try {
        await mongoose.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        });
        app.listen(PORT, () => console.log(`API app has been started on port ${PORT}...`));
    } catch (e) {
        console.log('Server Error', e.message);
        process.exit(1);
    }
}

start();


//mongoDB, login: lendmid, pass: JZaDz1tCMC8l7z8X
/////
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));
//
// dataBase.connect('mongodb://localhost:27017', {useUnifiedTopology: true, useNewUrlParser: true},(err) => {
//     if (err) return console.log(err);
//
//     console.log('DataBase connected');
//
//     app.listen(PORT, () => {
//         console.log(`API app has been started on port ${PORT}...`)
//     })
// })
//
// app.get('/users', usersController.all)
// app.get('/users/:id', usersController.findById)
//
// app.post('/users', usersController.create)
//
// app.put('/users/:id', usersController.update)
//
// app.delete('/users/:id', usersController.delete)
