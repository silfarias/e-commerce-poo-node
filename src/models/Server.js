import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import { router } from '../routes/router.js'
import './User.js'


class Server {
    constructor() { // llamaremos al metodo constructor una vez que creemos la instancia de la clase
        this.app = express()
        this.port = process.env.PORT
        this.middlewares(),
        this.router()
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(morgan('dev'));
        this.app.use(express.json());
    }

    router() {
        this.app.use('/', router)
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en http://localhost:${this.port}`)
        })
    }  
}

export { Server }