"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Producto = void 0;
const sequelize_1 = require("sequelize");
// en products se detallan los productos y el vendedor asociado
class Producto extends sequelize_1.Model {
    static initModel(database) {
        Producto.init({
            productName: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false
            },
            description: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: true
            },
            price: {
                type: sequelize_1.DataTypes.DECIMAL(10, 2),
                allowNull: false,
            },
            stock: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false
            }
        }, {
            sequelize: database.sequelize,
            modelName: 'Producto',
            tableName: 'products',
            timestamps: false
        });
    }
}
exports.Producto = Producto;
//# sourceMappingURL=Producto.js.map