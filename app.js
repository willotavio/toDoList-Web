const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname,
    'public')));

app.get('/', (req, res) => {
    res.sendFile(__dirname + 'index.html');
});

app.listen(8081, '192.168.1.100' || 'localhost', function(){
    console.log("Connected!");
});