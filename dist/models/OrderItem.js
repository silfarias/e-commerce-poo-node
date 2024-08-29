"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderItem = void 0;
const sequelize_1 = require("sequelize");
// en order_items detallamos los productos y cantidades en cada orden
class OrderItem extends sequelize_1.Model {
    static initModel(database) {
        OrderItem.init({
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            quantity: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false
            },
            price: {
                type: sequelize_1.DataTypes.DECIMAL(10, 2),
                allowNull: false
            }
        }, {
            sequelize: database.sequelize,
            modelName: 'OrderItem',
            tableName: 'order_items',
            timestamps: false
        });
    }
}
exports.OrderItem = OrderItem;
//# sourceMappingURL=OrderItem.js.map