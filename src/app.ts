import express from 'express';
const app = express();

app.get('/vivo',(req,res) => {
    res.send('ok');
})

app.listen(5000,()=>console.log('executando...'))