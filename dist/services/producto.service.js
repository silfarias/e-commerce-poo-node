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
exports.ProductoService = void 0;
const Producto_1 = require("../models/Producto");
class ProductoService {
    constructor() {
        this.productModel = Producto_1.Producto;
    }
    create(productData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const productCreated = yield this.productModel.create(productData);
                return productCreated;
            }
            catch (error) {
                console.log('error al crear producto: ', error);
                throw new Error('error al crear producto: ', error);
            }
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const products = yield this.productModel.findAll();
                return products;
            }
            catch (error) {
                throw new Error('error al obtener productos: ', error);
            }
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const product = yield this.productModel.findByPk(id);
                if (!product) {
                    throw new Error('producto no encontrado');
                }
                return product;
            }
            catch (error) {
                throw new Error('error al obtener producto: ', error);
            }
        });
    }
    update(id, updatedData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const product = yield this.getById(id);
                return yield product.update(updatedData);
            }
            catch (error) {
                throw new Error('Error al actualizar producto: ', error);
            }
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const product = yield this.getById(id);
                yield product.destroy();
                return { message: 'producto eliminado' };
            }
            catch (error) {
                throw new Error('error al eliminar producto: ', error);
            }
        });
    }
}
exports.ProductoService = ProductoService;
//# sourceMappingURL=producto.service.js.map