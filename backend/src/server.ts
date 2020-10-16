import express from 'express';
import './database/connection';

const app = express();
app.use(express.json());

app.get('/users', (request, response) => {
    console.log("teste")
    return response.send({ message: 'Hello Word' })
});

app.listen(3333); //basta trocar o valor para alterar a porta

//localhost:3333