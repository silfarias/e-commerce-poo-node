import { Router } from 'express';
import { UserRoutes } from './users.routes'; 
import { ProductoRoutes } from './producto.routes';

const router = Router();

router.use('/users', UserRoutes.router);
router.use('/products', ProductoRoutes.router)

export { router };