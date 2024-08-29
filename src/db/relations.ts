import { Cart } from "../models/Cart.js"
import { CartItem } from "../models/CartItem.js"
import { Order } from "../models/Order.js"
import { OrderItem } from "../models/OrderItem.js"
import { Producto } from "../models/Producto.js"
import { Roles } from "../models/Roles.js"
import { User } from "../models/User.js"


export const relations = () => {

    // definimos rol de cada usuario (cliente, vendedor, admin)
    // uno a muchos
    // un rol puede estar asociado a muchos usuarios, pero un usuario cuenta con un solo rol
    Roles.hasMany(User, { 
        sourceKey: 'id',
        foreignKey: 'id_role'
    })
    User.belongsTo(Roles, {
        foreignKey: 'id_role',
        targetKey: 'id'
    })

    // indicamos qué usuario (vendedor) es el propietario de cada producto
    User.hasMany(Producto, {
        sourceKey: 'id',
        foreignKey: 'id_seller'
    })
    Producto.belongsTo(User, {
        foreignKey: 'id_seller',
        targetKey: 'id'
    })

    // asociamos cada carrito con un usuario específico
    User.hasOne(Cart, {
        foreignKey: 'id_user',
    })
    Cart.belongsTo(User, {
        foreignKey: 'id_user',
    })

    // indica qué productos están en cada carrito.
    Cart.hasMany(CartItem, {
        sourceKey: 'id',
        foreignKey: 'id_cart'
    })
    CartItem.belongsTo(Cart, {
        foreignKey: 'id_cart',
        targetKey: 'id'
    })

    // asociamos cada orden con un usuario específico.
    User.hasMany(Order, {
        foreignKey: 'id_user',
    })
    Order.belongsTo(User, {
        foreignKey: 'id_user',
    })


    // especificamos qué productos están en cada carrito
    Producto.hasMany(CartItem, {
        sourceKey: 'id',
        foreignKey: 'id_product'
    })
    CartItem.belongsTo(Producto, {
        foreignKey: 'id_product',
        targetKey: 'id'
    })

    // detalla qué productos están en cada orden.
    Order.hasMany(OrderItem, {
        sourceKey: 'id',
        foreignKey: 'id_order'
    })

    OrderItem.belongsTo(Order, {
        foreignKey: 'id_order',
        targetKey: 'id'
    })

    // especificamos qué productos están en cada orden
    Producto.hasMany(OrderItem, {
        sourceKey: 'id',
        foreignKey: 'id_product'
    })
    OrderItem.belongsTo(Producto, {
        foreignKey: 'id_product',
        targetKey: 'id'
    })
}