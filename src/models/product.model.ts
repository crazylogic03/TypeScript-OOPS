import { model, Schema } from "mongoose";
import { ProductDocument, ProductModelInterface } from "../utils/product.interface";

const productSchema = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String },
        price: { type: Number, required: true },
        category: { type: String, required: true },
        stock: { type: Number, default: 0 },
        isDeleted: { type: Boolean, default: false },
    },
    { timestamps: true }
);

productSchema.index({ name: "text", description: "text", category: "text" });

const ProductModel = model<ProductDocument, ProductModelInterface>("Product", productSchema);

export default ProductModel;
