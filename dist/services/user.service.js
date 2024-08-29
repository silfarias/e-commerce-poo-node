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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const User_1 = require("../models/User");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonWebToken_1 = require("../utils/jsonWebToken");
class UserService {
    constructor() {
        this.userModel = User_1.User; // asignamos el modelo de usuario al servicio
    }
    create(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const hashedPassword = yield bcrypt_1.default.hash(user.password, 10);
                user.password = hashedPassword;
                const userCreated = yield this.userModel.create(user);
                return userCreated;
            }
            catch (error) {
                throw new Error('error al registrar usuario: ', error);
            }
        });
    }
    login(username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this.userModel.findOne({ where: { username } });
                if (!user) {
                    throw new Error('usuario no encontrado');
                }
                const isMatch = yield bcrypt_1.default.compare(password, user.password);
                if (!isMatch) {
                    throw new Error('contraseña incorrecta');
                }
                const token = yield jsonWebToken_1.jsonWebToken.crearJWT({ id: user.id, role: user.role });
                return { user, token };
            }
            catch (error) {
                throw new Error('error al loguearse: ', error);
            }
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield this.userModel.findAll();
                return users;
            }
            catch (error) {
                throw new Error('error al obtener usuarios: ', error);
            }
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this.userModel.findByPk(id);
                if (!user) {
                    throw new Error('usuario no encontrado');
                }
                return user;
            }
            catch (error) {
                throw new Error('error al obtener usuario: ', error);
            }
        });
    }
    update(id, updatedData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this.getById(id);
                return yield user.update(updatedData);
            }
            catch (error) {
                throw new Error('error al editar usuario: ', error);
            }
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this.getById(id);
                yield user.destroy();
                return { message: 'usuario eliminado' };
            }
            catch (error) {
                throw new Error('error al eliminar usuario: ', error);
            }
        });
    }
}
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map