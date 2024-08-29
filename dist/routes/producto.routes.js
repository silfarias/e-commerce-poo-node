"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductoRoutes = void 0;
const express_1 = require("express");
const producto_service_1 = require("../services/producto.service");
const producto_controller_1 = require("../controllers/producto.controller");
// import { authMiddleware } from '../middlewares/autenticacion';
// import { authorizeRoles } from '../middlewares/authorizeRoles';
// import { ROLES } from '../constants/roles';
class ProductoRoutes {
    static get router() {
        const router = (0, express_1.Router)();
        const productoService = new producto_service_1.ProductoService();
        const productoController = new producto_controller_1.ProductoController(productoService);
        router.post('/', productoController.createProduct.bind(productoController));
        router.get('/', productoController.getProducts.bind(productoController));
        router.get('/:id', productoController.getProductById.bind(productoController));
        router.put('/:id', productoController.updateProduct.bind(productoController));
        router.delete('/:id', productoController.deleteProduct.bind(productoController));
        return router;
    }
}
exports.ProductoRoutes = ProductoRoutes;
//# sourceMappingURL=producto.routes.js.map