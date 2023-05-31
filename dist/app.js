import express from 'express';
var app = express();
app.get('/vivo', function (req, res) {
    res.send('ok');
});
app.listen(5000, function () { return console.log('executando...'); });
