'use strict';
const express = require('express');
const app = express();

const mysql = require('mysql')

app.use(express.static('docs'));

const connection = mysql.createConnection({
    host: 'localhost',
    port: '32000',
    user: 'root',
    password: 'root',
    database: 'citiesData'
})
app.get('/api/v1/cities', function(req, res) {

    connection.connect()

    connection.query('SELECT * FROM tblCitiesImport', function (err, rows, fields) {
        if (err) throw err;

        console.log(rows);
        res.json(rows);
    })

    connection.end()


});

app.set('port', process.env.PORT || 8000);
app.set('ip', process.env.NODEJS_IP || '127.0.0.1');

app.listen(app.get('port'), function() {
    console.log('%s: Node server started on %s ...', Date(Date.now()), app.get('port'));
});