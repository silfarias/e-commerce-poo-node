import { jsonWebToken } from "../utils/jsonWebToken";
import { NextFunction, Request, Response } from "express";


const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
        return res.status(401).json({ message: "accceso denegado, se requiere autenticación" });
    }
    const token = authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: "token inválido o expirado" });
    }
    try {
        const decoded = jsonWebToken.verificarJWT(token);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'token invalido o expirado'});
    }
}

export { authMiddleware}