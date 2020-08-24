let express = require('express');
let bodyParser = require('body-parser');
let ObjectID = require('mongodb').ObjectID;

let dataBase = require('./dataBase');

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// dataBase.connect('mongodb://localhost:27017', {useUnifiedTopology: true, useNewUrlParser: true}, err => { //подключение базы данных
dataBase.connect('mongodb://localhost:27017', {useUnifiedTopology: true, useNewUrlParser: true},err => { //подключение базы данных
    if (err) return console.log(err);
    
    console.log('DataBase Connected');
    
    app.listen(3012, () => { // подключение сервера на локалхост на порт 3012
        console.log('API app started')
    })
})

app.get('/', (req, res) => { // по умолчанию по урлу, указанному в app.listen(3012, ..), то есть по http://localhost:3012/ будет происходить get запрос, который на клиент отдаст Hello API
    res.send('Hello API');
})
app.get('/users', (req, res) => { // по урлу http://localhost:3012/users выведет массив объектов users
    dataBase.get().collection('users').find().toArray((err, docs) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(docs);
    })
})

app.get('/users/:id', function (req, res) { // :id это динамический айдишник. То есть http://localhost:3012/users/1 или http://localhost:3012/users/2 разницы нет. В зависимости от кода дальше будет отдавать определенные данные
    // все айдишники в моного это специальные ObjectID. Чтобы найти какой-то документ нам необходимо строку айдишника конвертировать в ObjectID
    dataBase.get().collection('users').findOne({_id: ObjectID(req.params.id)}, (err, doc) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(doc);
    })
})

app.post('/users', function (req, res) { // метод post реализует добавление пользователя в базу данных
    let user = {
        name: req.body.name,
    };
    dataBase.get().collection('users').insert(user, (err, result) => {
        // обращение к коллекции users. Если коллекции не существует, то она создасться автоматически. На вход в insert нужно передать объект, который мы хоти сохранить, вторым параметром идет функция с параметрами err и result
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(user);
    })
})

app.put('/users/:id', (req, res) => {
    dataBase.get().collection('users').updateOne(
        {_id: ObjectID(req.params.id)},
        {$set: {name: req.body.name}},
        (err, result) => {
            if (err) {
                console.log(err);
                return res.sendStatus(500);
            }
            res.sendStatus(200);
        }
    )
})

app.delete('/users/:id', function (req, res) {
    dataBase.get().collection('users').deleteOne(
        {_id: ObjectID(req.params.id)},
        (err, result) => {
            if (err) {
                console.log(err);
                return res.sendStatus(500);
            }
            res.sendStatus(200);
        }
    )
})

let users = [
    {
        id: 1,
        name: "Megan Claire Washington"
    },
    {
        id: 2,
        name: "Patrick Steven Gonzales"
    },
    {
        id: 3,
        name: "Stephanie Lillian Coleman"
    },
]