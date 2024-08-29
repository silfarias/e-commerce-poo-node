"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartItem = void 0;
const sequelize_1 = require("sequelize");
// en cart_items almacenamos los productos y cantidades en cada carrito
class CartItem extends sequelize_1.Model {
    static initModel(database) {
        CartItem.init({
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            quantity: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false
            }
        }, {
            sequelize: database.sequelize,
            modelName: 'CartItem',
            tableName: 'cart_items',
            timestamps: false
        });
    }
}
exports.CartItem = CartItem;
//# sourceMappingURL=CartItem.js.map