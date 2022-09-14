const express = require('express');

const app = express();

app.get('/health', (req, res, next) => {
    res.status(200).json({
        message: 'app is healthy'
    });
});

module.exports = app;