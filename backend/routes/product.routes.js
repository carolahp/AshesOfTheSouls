import {Router} from "express";
import {methods as productController} from "../controllers/product.controller.js";

const router = Router();
router.get("/products",productController.getProducts);
router.get("/product/:idProduct", productController.getProduct);
router.get("/productMedia/:idProduct", productController.getProductMedia);
export default router;