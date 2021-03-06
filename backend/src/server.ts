import express from 'express';
import './database/connection';
import routes from './routes';
import path from 'path';
import 'express-async-errors';
import errorHandler from './errors/handler'

const app = express();
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);

app.listen(3333); //basta trocar o valor para alterar a porta

//localhost:3333