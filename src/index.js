import express from 'express';
import morgan from 'morgan';
import cors from 'cors';


//1 iniciar la aplicacion

const app = express();

//2 configuraciones generales

const PORT = process.env.PORT || 5000;

//3 middlewares

app.use(morgan("dev"));
app.use(cors());
app.use(express.json())

// 4 rutas

// 5 iniciar el servidor

app.listen(()=>{
    console.log("puerto corriendo en el puerto " + PORT)
})