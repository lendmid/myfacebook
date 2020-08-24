let MongoClient = require('mongodb').MongoClient;

let state = {
    dataBase: null,
};

exports.connect = (url, options, callback) => {
    if (state.dataBase) return callback();
    
    MongoClient.connect(url, {useUnifiedTopology: true, useNewUrlParser: true}, (err, client) => {
        if (err) return callback(err);
        
        state.dataBase = client.db('27017');
        callback();
    })
}

exports.get = function () {
    return state.dataBase;
}
