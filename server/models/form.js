const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Form = new Schema({
    id: String,
    serviceDate: Date,
    serviceTime: String,
    name: { type: String, required: true },
    birthday: { type: String, required: true },
    phone: String,
    serviceStatus: String,
    serviceContent: String,
});

module.exports = mongoose.model('forms', Form);
