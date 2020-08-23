let express = require('express');
let app = express();

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