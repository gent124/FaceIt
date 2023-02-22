"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = require("../controllers/UserController");
const UserService_1 = require("../services/UserService");
const BaseRepository_1 = require("../repositories/BaseRepository");
const pg_1 = require("pg");
const pool = new pg_1.Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: parseInt('5432')
});
const userRoutes = (0, express_1.Router)();
const UsersRepository = new BaseRepository_1.BaseRepository(pool, "users");
const userService = new UserService_1.UserService(UsersRepository);
const UserController = new UserController_1.UsersController(userService);
userRoutes.get('/get', UserController.getUsers);
userRoutes.get('/get/:id', UserController.getUserById);
userRoutes.post('/create', UserController.createUser);
userRoutes.put('/update/:id', UserController.updateUser);
userRoutes.delete('/delete/:id', UserController.deleteUser);
exports.default = userRoutes;
