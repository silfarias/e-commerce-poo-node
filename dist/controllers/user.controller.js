"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this.userService.create(req.body);
                res.status(201).json({ message: 'usuario registrado', user });
            }
            catch (error) {
                res.status(400).json({ message: error.message });
            }
        });
    }
    loginUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { username, password } = req.body;
                const { user, token } = yield this.userService.login(username, password);
                res.status(200).json({ message: `logueado correctamente`, user, token });
            }
            catch (error) {
                res.status(400).json({ message: error.message });
            }
        });
    }
    getUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield this.userService.getAll();
                res.status(200).json(users);
            }
            catch (error) {
                res.status(400).json({ message: error.message });
            }
        });
    }
    getUserById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this.userService.getById(req.params.id);
                res.status(200).json(user);
            }
            catch (error) {
                res.status(404).json({ message: error.message });
            }
        });
    }
    updateUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updatedUser = yield this.userService.update(req.params.id, req.body);
                res.status(200).json(updatedUser);
            }
            catch (error) {
                res.status(400).json({ message: error.message });
            }
        });
    }
    deleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.userService.delete(req.params.id);
                res.status(200).json({ message: 'usuario eliminado' });
            }
            catch (error) {
                res.status(400).json({ message: error.message });
            }
        });
    }
}
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map