import { TodoModel, ToDoInterface } from "../schema/todo.schema";
export class ToDoService {

    async getTask() {
        return await TodoModel.find()
    }

    async createTask() {
        return await TodoModel.create()
    }

    updateTask() {

    }

    async deleteTask() {
        return await TodoModel.deleteMany()

    }

}