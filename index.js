// Author : Chathu Vishwajith
// Licence : MIT License
// http://opensource.org/licenses/MIT

'use strict';

const express = require('express');

const app = express();

app.get('/api/v1/index', function(req, res) {
    res.send('Welcome to Demo API');
});

app.set('port', process.env.PORT || 8080);
app.set('ip', process.env.NODEJS_IP || '127.0.0.1');

app.listen(app.get('port'), function() {
    console.log('%s: Node server started on %s ...', Date(Date.now()), app.get('port'));
});