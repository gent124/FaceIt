//importing required modules
import { Router } from "express";
import { UsersController } from "../controllers/UserController";
import { UserService } from "../services/UserService";
import { User } from "../model/user"
import { IBaseRepository } from "../interfaces/IBaseRepository"
import { BaseRepository } from "../repositories/BaseRepository";
import { Pool } from "pg";
import dotenv from "dotenv";
dotenv.config();
//Creating Pool instance that gets the values from the .env file
const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: "root123",
    port: parseInt('5432')
});


//Creating an instance of Router
const userRoutes = Router();


//Creating a new instance of BaseRepository of type IBaseRepository<User> that takes 2 parameters the Pool instance and the tableName
const UsersRepository: IBaseRepository<User> = new BaseRepository(pool, "users");
//Creating a new instance of UserService that takes our userREpository as paramaeter
const userService = new UserService(UsersRepository)
//Creating a new instance of UserController that takes the userService as parameter
const UserController = new UsersController(userService);


//Defining routes
userRoutes.get('/get', UserController.getUsers);
userRoutes.get('/get/:id', UserController.getUserById);
userRoutes.post('/create', UserController.createUser);
userRoutes.put('/update/:id', UserController.updateUser);
userRoutes.delete('/delete/:id', UserController.deleteUser);

//exporting the routes for use inn different modules
export default userRoutes;
