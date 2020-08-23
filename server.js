let express = require('express');

let app = express();

app.get('/', function (req, res) {
    res.send('Hello API')
})

app.listen(3012, function () {
    console.log('API app started')
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