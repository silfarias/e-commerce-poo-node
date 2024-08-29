"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
require("dotenv/config");
class Config {
    constructor() {
        this.port = process.env.PORT,
            this.dbName = process.env.DB_NAME,
            this.dbUser = process.env.DB_USER,
            this.dbPassword = process.env.DB_PASSWORD,
            this.dbHost = process.env.DB_HOST,
            this.dbDialect = process.env.DB_DIALECT,
            this.dbPort = process.env.DB_PORT,
            this.secretKey = process.env.SECRET_KEY;
    }
    getPort() {
        return this.port;
    }
    getConfigDataBase() {
        return {
            name: this.dbName,
            user: this.dbUser,
            password: this.dbPassword,
            host: this.dbHost,
            dialect: this.dbDialect,
            port: this.dbPort
        };
    }
}
const config = new Config();
exports.config = config;
//# sourceMappingURL=env.config.js.map