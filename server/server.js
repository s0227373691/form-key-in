const express = require('express');
const db = require('./config/db');
const path = require('path');
const app = express();
db();

const form = require('./routers/form');

app.use(express.json());

app.use('/dist', express.static('./dist'));
app.use('/api/form', form);
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'), (err) => {
        if (err) res.sendStatus(404);
    });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}`));
