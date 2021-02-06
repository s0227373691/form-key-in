const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Form = new Schema({
    id: String,
    serviceDate: Date,
    serviceTime: String,
    gender: String,
    name: { type: String, required: true },
    birthday: { type: Date, required: true },
    phone: String,
    serviceStatus: String,
    serviceContent: String,
    livingArea: String,
    caseFamilySubsidy: String,
    employmentSituation: String,
    causeOfFailure: String,
    domicileaddress: String,
    idNumber: { type: String, required: true },
    oldSystemCategory: String,
    contactPersonName: String,
    obstacleCategory: String,
    barrierLevel: String,
    ageGroup: String,
    serviceObjectSource: String,
});

module.exports = mongoose.model('forms', Form);
