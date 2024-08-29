import { User } from './User';
import { Roles } from './Roles';
import { Producto } from './Producto';
import { Cart } from './Cart';
import { CartItem } from './CartItem';
import { Order } from './Order';
import { OrderItem } from './OrderItem';

class InitModels {
    static init(database) { // usamos static para no tener que crear una instancia de InitModels
        Roles.initModel(database);
        User.initModel(database);
        Producto.initModel(database);
        Cart.initModel(database);
        CartItem.initModel(database);
        Order.initModel(database);
        OrderItem.initModel(database);
    }
}

export { InitModels}