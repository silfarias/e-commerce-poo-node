"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart = void 0;
const sequelize_1 = require("sequelize");
// carts representa los carritos de compra de los usuarios
class Cart extends sequelize_1.Model {
    static initModel(database) {
        Cart.init({
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            }
        }, {
            sequelize: database.sequelize,
            modelName: 'Cart',
            tableName: 'carts',
            timestamps: true
        });
    }
}
exports.Cart = Cart;
//# sourceMappingURL=Cart.js.map