const express = require('express');
const router = express.Router();

const FormModel = require('../models/form');

router.post('/', (req, res) => {
    const {
        id,
        serviceDate,
        serviceTime,
        name,
        birthday,
        phone,
        serviceStatus,
        serviceContent,
    } = req.body;

    const formModel = new FormModel({
        id,
        serviceDate: new Date(serviceDate),
        serviceTime,
        name,
        birthday,
        phone,
        serviceStatus,
        serviceContent,
    });

    formModel.save();

    res.send('form');
});

module.exports = router;
