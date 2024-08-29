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
exports.InsertUsers = exports.User = void 0;
const sequelize_1 = require("sequelize");
// en users almacenamos la información de los usuarios incluyendo su rol (admin, vendedor, cliente)
class User extends sequelize_1.Model {
    static initModel(database) {
        User.init({
            username: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false
            },
            email: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            password: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false
            },
        }, {
            sequelize: database.sequelize, // instancia de Sequelize
            modelName: 'User',
            tableName: 'users',
            timestamps: false
        });
    }
}
exports.User = User;
class InsertUsers {
    constructor() {
        this.insertUsers();
    }
    static insertUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            const usuarios = yield User.bulkCreate([
                { username: 'Fabian1', email: 'fabian@gmail.com', password: '123456', id_role: 1 },
                { username: 'Lucas1', email: 'lucas@gmail.com', password: '123456', id_role: 2 },
                { username: 'Daniel1', email: 'daniel@gmail.com', password: '123456', id_role: 3 }
            ]);
        });
    }
}
exports.InsertUsers = InsertUsers;
//# sourceMappingURL=User.js.map