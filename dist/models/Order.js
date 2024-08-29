"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const sequelize_1 = require("sequelize");
// en order registramos las compras realizadas por los usuarios
class Order extends sequelize_1.Model {
    static initModel(database) {
        Order.init({
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            totalAmount: {
                type: sequelize_1.DataTypes.DECIMAL(10, 2),
                allowNull: false,
            }
        }, {
            sequelize: database.sequelize,
            modelName: 'Order',
            tableName: 'orders',
            timestamps: false
        });
    }
}
exports.Order = Order;
//# sourceMappingURL=Order.js.map