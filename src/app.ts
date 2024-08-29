import 'dotenv/config'
import { Server } from './server/Server'
import { relations } from './db/relations'
import { InsertRoles } from './models/Roles'
import { DataBase } from './db/DataBase';
import { InitModels } from './models/index';


const database = new DataBase(); // inicializamos la base de datos

async function startSever() {

    InitModels.init(database) // inicializamos todos los modelos definidos
    relations() // asociamos 

    await database.connectDb() // conectamos base de datos y sincronizamos modelos
    // await InsertRoles.insertRoles() // insertamos datos de roles
    
    const server = new Server()
    server.listen() // iniciamos servidor
}

startSever()