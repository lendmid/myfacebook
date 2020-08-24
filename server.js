let express = require('express');
let bodyParser = require('body-parser');
let dataBase = require('./dataBase');
let usersController = require('./controllers/users')
let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

dataBase.connect('mongodb://localhost:27017', {useUnifiedTopology: true, useNewUrlParser: true},err => {
    if (err) return console.log(err);
    
    console.log('DataBase connected');
    
    app.listen(3012, () => {
        console.log('API app started')
    })
})

app.get('/users', usersController.all)

app.get('/users/:id', usersController.findById)

app.post('/users', usersController.create)

app.put('/users/:id', usersController.update)

app.delete('/users/:id', usersController.delete)
