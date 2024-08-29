"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const jsonWebToken_1 = require("../utils/jsonWebToken");
const authMiddleware = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
        return res.status(401).json({ message: "accceso denegado, se requiere autenticación" });
    }
    const token = authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: "token inválido o expirado" });
    }
    try {
        const decoded = jsonWebToken_1.jsonWebToken.verificarJWT(token);
        req.user = decoded;
        next();
    }
    catch (error) {
        return res.status(401).json({ message: 'token invalido o expirado' });
    }
};
exports.authMiddleware = authMiddleware;
//# sourceMappingURL=autenticacion.js.map