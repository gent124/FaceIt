import UserService from '../Services/usersService' // Import the service from the userService 
import { Pool } from 'pg'; // import Pool from the postgres library
import dotenv from 'dotenv'; // import dotenv to provide with variables from .env file
dotenv.config(); //Loads the .env 
import { Request, Response, NextFunction } from "express"; // importing request , response , next function from express to define the types
import { UserRepository } from '../Repositories/userRepository'; // Importing UserRepository from userRepository file

//Creating a configuration for our database server
const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: parseInt('5432')
});

//Injecting the database in user repositories
const userRepository = new UserRepository(pool, 'users');
//Injecting the user repository in userService
const userService = new UserService(userRepository);

//method to get All users 
const getUsers = async (req: Request, res: Response) => {
    const users = await userService.getAllUsers();
    res.json(users);
}
// Method to get a sigle user by id
const getUserById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const user = await userService.getUserById(id);
    res.json(user);
}

// //Method to create a user
const createUser = async (req: Request, res: Response) => {
    const user = await userService.createUser(req.body);
    console.log(user);
    if (user) {
        res.status(200).send('User Added successfully with user_id ' + req.body.id);
    }
    else {
        res.status(400).send('User not added');
    }
}

//Method to delete a user
const deleteUser = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const user = await userService.deleteUser(id);
    res.status(200).send(user)

}
//exporting methods
export = {
    getUsers,
    getUserById,
    createUser,
    deleteUser

}