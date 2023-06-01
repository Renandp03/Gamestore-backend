import express from 'express';
import cors from 'cors';
import routes from './routers/routes.js';
var app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
app.get('/vivo', function (req, res) {
    res.send('ok');
});
app.listen(5000, function () { return console.log('executando...'); });
