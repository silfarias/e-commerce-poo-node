import { Router } from 'express';
import { ProductoService } from '../services/producto.service.js';
import { ProductoController } from '../controllers/producto.controller.js';
// import { authMiddleware } from '../middlewares/autenticacion.js';
// import { authorizeRoles } from '../middlewares/authorizeRoles.js';
// import { ROLES } from '../constants/roles.js';

class ProductoRoutes {
    static get router() {
        const router = Router();
        const productoService = new ProductoService();
        const productoController = new ProductoController(productoService);

        router.post('/', productoController.createProduct.bind(productoController));
        router.get('/', productoController.getProducts);
        router.get('/:id', productoController.getProductById);
        router.put('/:id', productoController.updateProduct);
        router.delete('/:id', productoController.deleteProduct);

        return router;
    }
}

export { ProductoRoutes };