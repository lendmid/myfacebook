let dataBase = require('../dataBase');
let ObjectID = require('mongodb').ObjectID;
// на каждый необходимый нам метод у нас будет функция в модели, которая будет работать с бд. Функции в контроллере ничего не знает о базе данных и просто выполняет методы из модели. Когда получает данные выводит их на экран

exports.all = (callBack) => {
    dataBase.get().collection('users').find().toArray((err, docs) => {
        callBack(err, docs);
    })
}

exports.findById = (id, callBack) => {
    dataBase.get().collection('users').findOne({_id: ObjectID(id)}, (err, doc) => {
        callBack(err, doc);
    })
}

exports.create = (user, callBack) => {
    dataBase.get().collection('users').insertOne(user, (err, result) => {
        callBack(err, result);
    })
}

exports.update = (id, newData, callBack) => {
    dataBase.get().collection('users').updateOne(
        {_id: ObjectID(id)},
        newData,
        (err, result) => {
            callBack(err, result);
        }
    )
}

exports.delete = (id, callBack) => {
    dataBase.get().collection('users').deleteOne(
        {_id: ObjectID(id)},
        (err, result) => {
            callBack(err, result)
        }
    )
}