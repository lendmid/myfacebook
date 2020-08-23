let express = require('express');
let bodyParser = require('body-parser');

let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(3012, function () {
    console.log('API app started')
})

app.get('/', function (req, res) {
    res.send('Hello API');
})
app.get('/users', function (req, res) {
    res.send(users);
})
app.get('/users/:id', function (req, res) {
    let user = users.find(function (user) {
        return user.id === Number(req.params.id)
    });
    res.send(user);
    console.log(user);
})

app.post('/users', function (req, res) {
    let user = {
        id: Date.now(),
        name: req.body.name,
    };
    users.push(user);
    res.send(user);
})

app.put('/users/:id', function (req, res) {
    let user = users.find(function (user) {
        return user.id === Number(req.params.id)
    });
    user.name = req.body.name;
    res.send(user);
    // res.sendStatus(200)
})

app.delete('/users/:id', function (req, res) {
    users = users.filter(function (user) {
        return user.id !== Number(req.params.id)
    })
    res.sendStatus(200)
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