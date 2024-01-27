import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { connectDB } from './ruta-a-tu-conexion/connectDB'; 
import { usersRouter } from './routes/users.router.js';
import handlebars from 'express-handlebars';
import { __dirname, uploader } from './routes/utils.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Conexión a la base de datos, llama a la función connectDB)
connectDB();

app.engine('handlebars', handlebars());
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');

app.post('/file', uploader.single('myfile'), (request, response) => {
    response.send('imagen subida');
});

// Rutas
app.use('/users', usersRouter);

// Inicia el servidor
app.listen(PORT, () => {
    console.log(`El servidor se está ejecutando en el puerto ${PORT}`);
});

