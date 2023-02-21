"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const usersService_1 = __importDefault(require("../Services/usersService")); // Import the service from the userService 
const pg_1 = require("pg"); // import Pool from the postgres library
const dotenv_1 = __importDefault(require("dotenv")); // import dotenv to provide with variables from .env file
dotenv_1.default.config(); //Loads the .env 
const userRepository_1 = require("../Repositories/userRepository"); // Importing UserRepository from userRepository file
//Creating a configuration for our database server
const pool = new pg_1.Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: parseInt('5432')
});
//Injecting the database in user repositories
const userRepository = new userRepository_1.UserRepository(pool);
//Injecting the user repository in userService
const userService = new usersService_1.default(userRepository);
//method to get All users 
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield userService.getAllUsers();
    res.json(users);
});
//Method to get a sigle user by id
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield userService.getUserById(req.params.id);
    res.json(user);
});
//Method to create a user
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield userService.createUser(req.body);
    if (user) {
        res.send('User Added successfully with id ' + req.body.id);
    }
});
module.exports = {
    getUsers,
    getUserById,
    createUser
};
