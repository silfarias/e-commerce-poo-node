"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitModels = void 0;
const User_1 = require("./User");
const Roles_1 = require("./Roles");
const Producto_1 = require("./Producto");
const Cart_1 = require("./Cart");
const CartItem_1 = require("./CartItem");
const Order_1 = require("./Order");
const OrderItem_1 = require("./OrderItem");
class InitModels {
    static init(database) {
        Roles_1.Roles.initModel(database);
        User_1.User.initModel(database);
        Producto_1.Producto.initModel(database);
        Cart_1.Cart.initModel(database);
        CartItem_1.CartItem.initModel(database);
        Order_1.Order.initModel(database);
        OrderItem_1.OrderItem.initModel(database);
    }
}
exports.InitModels = InitModels;
//# sourceMappingURL=index.js.map