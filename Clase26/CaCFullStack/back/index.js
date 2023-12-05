import express from "express"
import cors from "cors"

const app = express()//guardo en app los metodos de express

const port = 8000

app.use(cors())
app.use(express.json())

//conexion a la base de datos

app.listen(port,()=>{
    console.log(`servidor del proyecto OK en el puerto ${port}`);
})
