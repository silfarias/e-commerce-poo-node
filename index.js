import 'dotenv/config'
import { Server } from './src/models/Server.js'
import { relations } from './src/db/relations.js'
import { InsertRoles } from './src/models/Roles.js'
import { DataBase } from './src/db/DataBase.js';
import { InitModels } from './src/models/index.js';
import { InsertUsers } from './src/models/User.js';


const database = new DataBase(); // inicializamos la base de datos

async function startSever() {

    InitModels.init(database) // inicializamos todos los modelos definidos
    relations() // asociamos 

    await database.connectDb() // conectamos base de datos y sincronizamos modelos
    // await InsertRoles.insertRoles() // insertamos datos de roles
    // await InsertUsers.insertUsers()
    
    const server = new Server()
    server.listen() // iniciamos servidor
}
startSever()



