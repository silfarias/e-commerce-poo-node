"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const users_routes_1 = require("./users.routes");
const producto_routes_1 = require("./producto.routes");
const router = (0, express_1.Router)();
exports.router = router;
router.use('/users', users_routes_1.UserRoutes.router);
router.use('/products', producto_routes_1.ProductoRoutes.router);
//# sourceMappingURL=router.js.map