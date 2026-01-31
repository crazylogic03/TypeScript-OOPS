import ProductModel from "../models/product.model";
import { ProductInterface } from "../utils/product.interface";

class ProductRepository {
    public async create(data: Partial<ProductInterface>) {
        return await ProductModel.create(data);
    }

    public async findAll(filter: any = {}, options: any = {}) {
        const { sort, limit, skip } = options;
        const query = ProductModel.find(filter);

        if (sort) query.sort(sort);
        if (skip) query.skip(skip);
        if (limit) query.limit(limit);

        return await query.exec();
    }

    public async findById(id: string) {
        return await ProductModel.findById(id);
    }

    public async update(id: string, data: any) {
        return await ProductModel.findByIdAndUpdate(id, data, { new: true });
    }

    public async delete(id: string) {
        return await ProductModel.findByIdAndDelete(id);
    }
}

export default ProductRepository;
