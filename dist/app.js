"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const Server_1 = require("./server/Server");
const relations_1 = require("./db/relations");
const DataBase_1 = require("./db/DataBase");
const index_1 = require("./models/index");
const database = new DataBase_1.DataBase(); // inicializamos la base de datos
function startSever() {
    return __awaiter(this, void 0, void 0, function* () {
        index_1.InitModels.init(database); // inicializamos todos los modelos definidos
        (0, relations_1.relations)(); // asociamos 
        yield database.connectDb(); // conectamos base de datos y sincronizamos modelos
        // await InsertRoles.insertRoles() // insertamos datos de roles
        // await InsertUsers.insertUsers()
        const server = new Server_1.Server();
        server.listen(); // iniciamos servidor
    });
}
startSever();
//# sourceMappingURL=app.js.map