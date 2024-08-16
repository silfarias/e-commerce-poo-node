import 'dotenv/config'
import { Server } from './src/models/Server.js'
import { DataBase } from './src/models/DataBase.js'
import { UserInit } from './src/models/User.js'

export const database = new DataBase()
const server = new Server()

UserInit(database)

database.connectDb()
server.listen()

