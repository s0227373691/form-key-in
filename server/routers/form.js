const express = require('express');
const router = express.Router();

const FormModel = require('../models/form');

router.post('/', (req, res) => {
    const {
        id,
            serviceDate,
            serviceTime,
            gender,
            name,
            birthday,
            phone,
            serviceStatus,
            serviceContent,
            livingArea,
            caseFamilySubsidy,
            employmentSituation,
            causeOfFailure,
            domicileaddress,
            idNumber,
            oldSystemCategory,
            contactPersonName,
            obstacleCategory,
            barrierLevel,
            ageGroup,
            serviceObjectSource,
    } = req.body;

    console.log(req.body)

    const formModel = new FormModel({
        id,
        serviceDate: new Date(serviceDate),
        serviceTime,
        gender,
        name,
        birthday: new Date(birthday),
        phone,
        serviceStatus,
        serviceContent,
        livingArea,
        caseFamilySubsidy,
        employmentSituation,
        causeOfFailure,
        domicileaddress,
        idNumber,
        oldSystemCategory,
        contactPersonName,
        obstacleCategory,
        barrierLevel,
        ageGroup,
        serviceObjectSource,
    });

    formModel.save();

    res.send('form');
});

router.post('/search', async (req,res) => {
    const {idNumber} = req.body
    const cc = await FormModel.find({idNumber}).then(data => {
        if(data.length){
            return {result: true, data:data[0]}}
        else return {result: false}
    })
    
    res.json(cc)
})

module.exports = router;
