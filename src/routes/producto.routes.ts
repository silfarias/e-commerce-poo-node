import { Router } from 'express';
import { ProductoService } from '../services/producto.service';
import { ProductoController } from '../controllers/producto.controller';
// import { authMiddleware } from '../middlewares/autenticacion';
// import { authorizeRoles } from '../middlewares/authorizeRoles';
// import { ROLES } from '../constants/roles';

class ProductoRoutes {
    static get router() {
        const router = Router();
        const productoService = new ProductoService();
        const productoController = new ProductoController(productoService);

        router.post('/', productoController.createProduct.bind(productoController));
        router.get('/', productoController.getProducts.bind(productoController));
        router.get('/:id', productoController.getProductById.bind(productoController));
        router.put('/:id', productoController.updateProduct.bind(productoController));
        router.delete('/:id', productoController.deleteProduct.bind(productoController));

        return router;
    }
}

export { ProductoRoutes };