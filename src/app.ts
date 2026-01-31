import express = require("express");
import mongoose from "mongoose";
import { Routes } from "./utils/route.interface";

class App {
    public app: express.Application;
    public port: string | number;

    constructor(routes: Routes[]) {
        this.app = express();
        this.port = process.env.PORT || 4000;

        this.connectDB();
        this.initializeMiddlewares();
        this.initializeRoutes(routes);
    }

    public startServer() {
        this.app.listen(this.port, () => {
            console.log(`Server listening on http://localhost:${this.port}`);
        });
    }

    private initializeMiddlewares() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }

    private initializeRoutes(routes: Routes[]) {
        routes.forEach((route) => {
            this.app.use("/api/v1", route.router);
        });
    }

    private async connectDB() {
        try {
            const dbUrl = process.env.MONGO_URI || "mongodb://localhost:27017/product_inventory";
            await mongoose.connect(dbUrl);
            console.log("DataBase Connected");
        } catch (err) {
            console.log("Database connection error:", err);
        }
    }
}

export default App;