import { Router } from "express";

const router = Router();

router.get('/users', (req, res) => {
    res.json({ message: 'Hello from API!' });
})

export { router }