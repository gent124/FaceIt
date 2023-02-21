import { Router } from "express";
import { UsersController } from "../controllers/UserController";
import { UserService } from "../Services/UserService";
import { User } from "../Model/user"
import { IBaseRepository } from "../interfaces/IbaseRepository"
import { BaseRepository } from "../Repositories/BaseRepository";
import { Pool } from "pg";

const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: parseInt('5432')
});

const userRoutes = Router();

const UsersRepository: BaseRepository<User> = new BaseRepository(pool, "users");
const userService = new UserService(UsersRepository)
const UserController = new UsersController(userService);

userRoutes.get('/get', UserController.getUsers);
userRoutes.get('/get/:id', UserController.getUserById);
userRoutes.post('/create', UserController.createUser);
userRoutes.put('/update/:id', UserController.updateUser);
userRoutes.delete('/delete/:id', UserController.deleteUser);

export default userRoutes;
