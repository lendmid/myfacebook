const {Schema, model, Types} = require('mongoose');


const schema = new Schema({
    message: {type: String, required: true},
    date: {type: Date, default: new Date(Date.now()).toLocaleString()},
    owner: {type: Types.ObjectId, ref: 'User'}
});

module.exports = model('Post', schema);
