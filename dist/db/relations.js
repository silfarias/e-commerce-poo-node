"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.relations = void 0;
const Cart_js_1 = require("../models/Cart.js");
const CartItem_js_1 = require("../models/CartItem.js");
const Order_js_1 = require("../models/Order.js");
const OrderItem_js_1 = require("../models/OrderItem.js");
const Producto_js_1 = require("../models/Producto.js");
const Roles_js_1 = require("../models/Roles.js");
const User_js_1 = require("../models/User.js");
const relations = () => {
    // definimos rol de cada usuario (cliente, vendedor, admin)
    // uno a muchos
    // un rol puede estar asociado a muchos usuarios, pero un usuario cuenta con un solo rol
    Roles_js_1.Roles.hasMany(User_js_1.User, {
        sourceKey: 'id',
        foreignKey: 'id_role'
    });
    User_js_1.User.belongsTo(Roles_js_1.Roles, {
        foreignKey: 'id_role',
        targetKey: 'id'
    });
    // indicamos qué usuario (vendedor) es el propietario de cada producto
    User_js_1.User.hasMany(Producto_js_1.Producto, {
        sourceKey: 'id',
        foreignKey: 'id_seller'
    });
    Producto_js_1.Producto.belongsTo(User_js_1.User, {
        foreignKey: 'id_seller',
        targetKey: 'id'
    });
    // asociamos cada carrito con un usuario específico
    User_js_1.User.hasOne(Cart_js_1.Cart, {
        foreignKey: 'id_user',
    });
    Cart_js_1.Cart.belongsTo(User_js_1.User, {
        foreignKey: 'id_user',
    });
    // indica qué productos están en cada carrito.
    Cart_js_1.Cart.hasMany(CartItem_js_1.CartItem, {
        sourceKey: 'id',
        foreignKey: 'id_cart'
    });
    CartItem_js_1.CartItem.belongsTo(Cart_js_1.Cart, {
        foreignKey: 'id_cart',
        targetKey: 'id'
    });
    // asociamos cada orden con un usuario específico.
    User_js_1.User.hasMany(Order_js_1.Order, {
        foreignKey: 'id_user',
    });
    Order_js_1.Order.belongsTo(User_js_1.User, {
        foreignKey: 'id_user',
    });
    // especificamos qué productos están en cada carrito
    Producto_js_1.Producto.hasMany(CartItem_js_1.CartItem, {
        sourceKey: 'id',
        foreignKey: 'id_product'
    });
    CartItem_js_1.CartItem.belongsTo(Producto_js_1.Producto, {
        foreignKey: 'id_product',
        targetKey: 'id'
    });
    // detalla qué productos están en cada orden.
    Order_js_1.Order.hasMany(OrderItem_js_1.OrderItem, {
        sourceKey: 'id',
        foreignKey: 'id_order'
    });
    OrderItem_js_1.OrderItem.belongsTo(Order_js_1.Order, {
        foreignKey: 'id_order',
        targetKey: 'id'
    });
    // especificamos qué productos están en cada orden
    Producto_js_1.Producto.hasMany(OrderItem_js_1.OrderItem, {
        sourceKey: 'id',
        foreignKey: 'id_product'
    });
    OrderItem_js_1.OrderItem.belongsTo(Producto_js_1.Producto, {
        foreignKey: 'id_product',
        targetKey: 'id'
    });
};
exports.relations = relations;
//# sourceMappingURL=relations.js.map