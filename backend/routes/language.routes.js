import {Router} from "express";

const router = Router();
router.get("/",(request,response) => {
    response.send("HOla hola");
});

export default router;