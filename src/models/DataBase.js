import { Sequelize } from "sequelize";

class DataBase {
    constructor() {
        this.sequelize = new Sequelize(
            process.env.DB_NAME,
            process.env.DB_USER,
            process.env.DB_PASSWORD,
            {
                host: process.env.DB_HOST,
                dialect: process.env.DB_DIALECT,
                port: process.env.DB_PORT
            }
        )
    }

    async connectDb() {
        try {
            await this.sequelize.authenticate()
            console.log(`Se he establecido la conexión a la base de datos ${process.env.DB_NAME}`);
            await this.sequelize.sync()
            console.log('Se han sincronizado las tablas');
        } catch (error) {
            console.log('No se ha podido conectar a la base de datos');
        }
    }
}

export { DataBase }