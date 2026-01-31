import { Router } from "express";
import { Routes } from "../utils/route.interface";
import ProductController from "../controllers/product.controller";

class ProductRoutes implements Routes {
    public path = "/products";
    public router = Router();
    public productController = new ProductController();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.post(`${this.path}`, this.productController.createProduct);
        this.router.get(`${this.path}`, this.productController.getAllProducts);
        this.router.get(`${this.path}/:id`, this.productController.getProductById);
        this.router.put(`${this.path}/:id`, this.productController.updateProduct);
        this.router.delete(`${this.path}/:id`, this.productController.deleteProduct);
    }
}

export default ProductRoutes;
