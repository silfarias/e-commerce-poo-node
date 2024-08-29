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
exports.InsertRoles = exports.Roles = void 0;
const sequelize_1 = require("sequelize");
// definimos roles del usuario (admin, vendedor, cliente)
class Roles extends sequelize_1.Model {
    static initModel(database) {
        Roles.init({
            name: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false,
                unique: true
            }
        }, {
            sequelize: database.sequelize,
            modelName: 'Roles',
            tableName: 'roles',
            timestamps: false
        });
    }
}
exports.Roles = Roles;
class InsertRoles {
    constructor() {
        this.insertRoles();
    }
    static insertRoles() {
        return __awaiter(this, void 0, void 0, function* () {
            const roles = yield Roles.bulkCreate([
                { name: 'admin' },
                { name: 'vendedor' },
                { name: 'cliente' }
            ]);
        });
    }
}
exports.InsertRoles = InsertRoles;
//# sourceMappingURL=Roles.js.map