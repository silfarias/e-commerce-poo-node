"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const router_1 = require("../routes/router");
require("../models/User");
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT;
        this.middlewares();
        this.router();
    }
    middlewares() {
        this.app.use((0, cors_1.default)());
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use(express_1.default.json());
    }
    router() {
        this.app.use('/', router_1.router);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en http://localhost:${this.port}`);
        });
    }
}
exports.Server = Server;
//# sourceMappingURL=Server.js.map