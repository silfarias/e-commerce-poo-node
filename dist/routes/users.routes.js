"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const express_1 = require("express");
const user_service_1 = require("../services/user.service");
const user_controller_1 = require("../controllers/user.controller");
const user_schema_1 = require("../models/schemas/user.schema");
class UserRoutes {
    static get router() {
        const router = (0, express_1.Router)();
        const userService = new user_service_1.UserService();
        const userController = new user_controller_1.UserController(userService);
        router.post('/register', user_schema_1.userSchema, userController.createUser.bind(userController));
        router.post('/auth', userController.loginUser.bind(userController));
        router.get('/', userController.getUsers.bind(userController));
        router.get('/:id', userController.getUserById.bind(userController));
        router.put('/:id', user_schema_1.userSchema, userController.updateUser.bind(userController));
        router.delete('/:id', userController.deleteUser.bind(userController));
        return router;
    }
}
exports.UserRoutes = UserRoutes;
//# sourceMappingURL=users.routes.js.map