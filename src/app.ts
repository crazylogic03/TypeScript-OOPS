import express from "express"
import mongoose from "mongoose"

interface App_Interface {
    startServer(): void
    connectDB(): void
    initializeRoutes(): void
}

export default class App implements App_Interface {

    port: number
    app: express.Application;

    constructor() {
        this.port = 4000
        this.app = express();
        this.startServer()
        this.connectDB()
        this.initializeRoutes()
    }

    startServer(): void {
        this.app.listen(this.port, () => {
            console.log(`Server Ruuning on port ${this.port}`)
        })
    }
    async connectDB(): Promise<void> {
        try {
            await mongoose.connect("")
            console.log("DataBase Connected")

        }
        catch (err) {
            console.log(err)
        }

    }
    initializeRoutes(): void {
        this.app.use(express.json())
    }

}