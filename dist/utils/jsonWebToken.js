"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonWebToken = void 0;
const env_config_1 = require("../config/env.config");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class Jwt {
    constructor(secretKey) {
        this.secretKey = secretKey;
    }
    crearJWT(payload) {
        return new Promise((resolve, reject) => {
            jsonwebtoken_1.default.sign(payload, this.secretKey, { expiresIn: '2h' }, (err, token) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(token);
                    console.log(env_config_1.config.secretKey);
                }
            });
        });
    }
    verificarJWT(token) {
        return new Promise((resolve, reject) => {
            jsonwebtoken_1.default.verify(token, this.secretKey, (err, decoded) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(decoded);
                    console.log(env_config_1.config.secretKey);
                }
            });
        });
    }
}
const jsonWebToken = new Jwt(env_config_1.config.secretKey);
exports.jsonWebToken = jsonWebToken;
//# sourceMappingURL=jsonWebToken.js.map