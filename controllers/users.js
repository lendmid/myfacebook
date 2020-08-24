let Users = require('../models/users');

exports.all = (req, res) => {
    Users.all((err, docs) => {
        if (err) {
            console.log(err);
            return res.senfStatus(500);
        }
        res.send(docs);
    })
}

exports.findById = (req, res) => {
    Users.findById(req.params.id, (err, doc) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(doc);
    })
}

exports.create = (req, res) => {
    let user = {
        name: req.body.name,
    };
    Users.create(user, (err, result) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(user);
    })
}

exports.update = (req, res) => {
    Users.update(req.params.id, {$set: {name: req.body.name}}, (err, result) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.sendStatus(200);
    })
}

exports.delete = (req, res) => {
    Users.delete(req.params.id, (err, result) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.sendStatus(200);
    })
}
