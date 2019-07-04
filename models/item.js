const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    name: {
        type: String
    },
    uid: {
        type: String,
        unique: true,
        required: [true, "UID field is required."]
    },
    price: {
        type: Number,
        default: 0,
        min: 1
    },
    count: {
        type: Number,
        default: 0,
        min: 0
    }
})

const Item = mongoose.model('Item', ItemSchema)

module.exports = Item