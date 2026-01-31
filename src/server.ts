import App from "./app";
import ProductRoutes from "./routes/product.routes";

const app = new App([new ProductRoutes()]);

app.startServer();