import { Document, Model } from "mongoose";

export interface ProductInterface {
    name: string;
    description?: string;
    price: number;
    category: string;
    stock: number;
    isDeleted: boolean;
}

export interface ProductDocument extends Document, ProductInterface { }

export type ProductModelInterface = Model<ProductDocument>;
