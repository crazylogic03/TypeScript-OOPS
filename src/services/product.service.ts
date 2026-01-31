import ProductRepository from "../repositories/product.repository";
import { ProductInterface } from "../utils/product.interface";

class ProductService {
    public productRepository = new ProductRepository();

    public async createProduct(data: Partial<ProductInterface>) {
        return await this.productRepository.create(data);
    }

    public async getAllProducts(query: any) {
        const page = parseInt(query.page as string) || 1;
        const limit = parseInt(query.limit as string) || 10;
        const skip = (page - 1) * limit;

        const filter: any = { isDeleted: false };
        if (query.search) {
            filter.$text = { $search: query.search as string };
        }
        if (query.category) {
            filter.category = query.category;
        }
        if (query.minPrice || query.maxPrice) {
            filter.price = {};
            if (query.minPrice) filter.price.$gte = Number(query.minPrice);
            if (query.maxPrice) filter.price.$lte = Number(query.maxPrice);
        }

        const sort: any = {};
        if (query.sortBy) {
            const parts = (query.sortBy as string).split(':');
            sort[parts[0]] = parts[1] === 'desc' ? -1 : 1;
        } else {
            sort.createdAt = -1;
        }

        return await this.productRepository.findAll(filter, { skip, limit, sort });
    }

    public async getProductById(id: string) {
        return await this.productRepository.findById(id);
    }

    public async updateProduct(id: string, data: any) {
        return await this.productRepository.update(id, data);
    }

    public async deleteProduct(id: string) {
        return await this.productRepository.update(id, { isDeleted: true });
    }
}

export default ProductService;
