import { Router } from "express";


export class AppRoutes {

    static get routes(): Router {

        const router = Router();

        router.get('/', (req, res) => {
            res.json('APP .....Routes!!!')
        })

        return router;
    }
}