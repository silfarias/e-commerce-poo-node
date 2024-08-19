import { config } from "../config/env.config.js";
import { Sequelize } from "sequelize";

class DataBase {
    constructor() {
        const dbConfig = config.getConfigDataBase()
        this.sequelize = new Sequelize(
            dbConfig.name,
            dbConfig.user,
            dbConfig.password,
            {
                host: dbConfig.host,
                dialect: dbConfig.dialect,
                port: dbConfig.port,
            }
        )
    }

    getSequelizeInstance() {
        return this.sequelize;
    }

    async connectDb() {
        try {
            await this.sequelize.sync({ force: false })
            console.log(`Se he establecido la conexión a la base de datos`);
        } catch (error) {
            console.log('No se ha podido conectar a la base de datos', error);
        }
    }
}

export { DataBase }