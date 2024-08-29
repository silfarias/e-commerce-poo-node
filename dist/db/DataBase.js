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
exports.DataBase = void 0;
const env_config_js_1 = require("../config/env.config.js");
const sequelize_1 = require("sequelize");
class DataBase {
    constructor() {
        const dbConfig = env_config_js_1.config.getConfigDataBase();
        this.sequelize = new sequelize_1.Sequelize(dbConfig.name, dbConfig.user, dbConfig.password, {
            host: dbConfig.host,
            dialect: dbConfig.dialect,
            port: dbConfig.port,
        });
    }
    getSequelizeInstance() {
        return this.sequelize;
    }
    connectDb() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.sequelize.sync({ force: false });
                console.log(`Se he establecido la conexión a la base de datos`);
            }
            catch (error) {
                console.log('No se ha podido conectar a la base de datos', error);
            }
        });
    }
}
exports.DataBase = DataBase;
//# sourceMappingURL=DataBase.js.map