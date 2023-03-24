"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//importing required modules
const express_1 = require("express");
const UserController_1 = require("../controllers/UserController");
const UserService_1 = require("../services/UserService");
const BaseRepository_1 = require("../repositories/BaseRepository");
const pg_1 = require("pg");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
//Creating Pool instance that gets the values from the .env file
const pool = new pg_1.Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: "root123",
    port: parseInt('5432')
});
//Creating an instance of Router
const userRoutes = (0, express_1.Router)();
//Creating a new instance of BaseRepository of type IBaseRepository<User> that takes 2 parameters the Pool instance and the tableName
const UsersRepository = new BaseRepository_1.BaseRepository(pool, "users");
//Creating a new instance of UserService that takes our userREpository as paramaeter
const userService = new UserService_1.UserService(UsersRepository);
//Creating a new instance of UserController that takes the userService as parameter
const UserController = new UserController_1.UsersController(userService);
//Defining routes
userRoutes.get('/get', UserController.getUsers);
userRoutes.get('/get/:id', UserController.getUserById);
userRoutes.post('/create', UserController.createUser);
userRoutes.put('/update/:id', UserController.updateUser);
userRoutes.delete('/delete/:id', UserController.deleteUser);
//exporting the routes for use inn different modules
exports.default = userRoutes;
