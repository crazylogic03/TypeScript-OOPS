import { Request, Response } from "express";
import ProductService from "../services/product.service";

class ProductController {
    public productService = new ProductService();

    public createProduct = async (req: Request, res: Response) => {
        try {
            const product = await this.productService.createProduct(req.body);
            return res.status(201).json({ success: true, data: product });
        } catch (error: any) {
            return res.status(500).json({ success: false, message: error.message });
        }
    };

    public getAllProducts = async (req: Request, res: Response) => {
        try {
            const products = await this.productService.getAllProducts(req.query);
            return res.status(200).json({ success: true, data: products });
        } catch (error: any) {
            return res.status(500).json({ success: false, message: error.message });
        }
    };

    public getProductById = async (req: Request, res: Response) => {
        try {
            const product = await this.productService.getProductById(req.params.id);
            if (!product) return res.status(404).json({ success: false, message: "Product not found" });
            return res.status(200).json({ success: true, data: product });
        } catch (error: any) {
            return res.status(500).json({ success: false, message: error.message });
        }
    };

    public updateProduct = async (req: Request, res: Response) => {
        try {
            const product = await this.productService.updateProduct(req.params.id, req.body);
            if (!product) return res.status(404).json({ success: false, message: "Product not found" });
            return res.status(200).json({ success: true, data: product, message: "Product updated successfully" });
        } catch (error: any) {
            return res.status(500).json({ success: false, message: error.message });
        }
    };

    public deleteProduct = async (req: Request, res: Response) => {
        try {
            const product = await this.productService.deleteProduct(req.params.id);
            if (!product) return res.status(404).json({ success: false, message: "Product not found" });
            return res.status(200).json({ success: true, data: null, message: "Product deleted successfully" });
        } catch (error: any) {
            return res.status(500).json({ success: false, message: error.message });
        }
    };
}

export default ProductController;
