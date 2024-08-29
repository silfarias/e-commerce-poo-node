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
exports.ProductoController = void 0;
class ProductoController {
    constructor(productService) {
        this.productService = productService;
    }
    createProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const productData = req.body;
                const newProduct = yield this.productService.create(productData);
                res.status(201).json(newProduct);
            }
            catch (error) {
                res.status(400).json({ message: error.message });
                console.log('error al crear producto: ', error);
            }
        });
    }
    getProducts(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const products = yield this.productService.getAll();
                res.status(200).json(products);
            }
            catch (error) {
                res.status(400).json({ message: error.message });
            }
        });
    }
    getProductById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const product = yield this.productService.getById(req.params.id);
                res.status(200).json(product);
            }
            catch (error) {
                res.status(404).json({ message: error.message });
            }
        });
    }
    updateProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updatedProduct = yield this.productService.update(req.params.id, req.body);
                res.status(200).json(updatedProduct);
            }
            catch (error) {
                res.status(400).json({ message: error.message });
            }
        });
    }
    deleteProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.productService.delete(req.params.id);
                res.status(200).json({ message: 'producto eliminado' });
            }
            catch (error) {
                res.status(400).json({ message: error.message });
            }
        });
    }
}
exports.ProductoController = ProductoController;
//# sourceMappingURL=producto.controller.js.map