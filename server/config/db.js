const mongoose = require('mongoose');

const URI =
    'mongodb+srv://admin:qIYitmlDKDTWqB8d@cluster0.tc4qj.mongodb.net/form-key-in?retryWrites=true&w=majority';

const connectDB = async () => {
    try {
        mongoose.set('useCreateIndex', true);
        await mongoose.connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('mongodb connected...');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
