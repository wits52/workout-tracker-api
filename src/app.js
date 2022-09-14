const bodyParser = require('body-parser');
const express = require('express');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ urlencoded: true }));

app.get('/health', (req, res, next) => {
    res.status(200).json({
        message: 'app is healthy'
    });
});

module.exports = app;