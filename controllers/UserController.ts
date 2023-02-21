import { Request, Response } from "express";
import { UserService } from "../Services/UserService";

export class UsersController<User> {
    constructor(
        private readonly userService: UserService
    ) { }



    //method to get All users 
    getUsers = async (req: Request, res: Response) => {
        const users = await this.userService.getAllUsers();
        res.status(200).json(users);
    }
    // Method to get a sigle user by id
    getUserById = async (req: Request, res: Response) => {
        const id = parseInt(req.params.id);
        const user = await this.userService.getUserById(id);
        res.status(200).json(user);
    }

    // //Method to create a user
    createUser = async (req: Request, res: Response) => {
        const user = await this.userService.createUser(req.body);
        console.log(user);
        if (user) {
            res.status(200).send('User Added successfully with user_id ' + req.body.id);
        }
        else {
            res.status(400).send('User not added');
        }
    }

    //Method to update a user
    updateUser = async (req: Request, res: Response) => {
        const id = parseInt(req.params.id);
        const user = await this.userService.updateUser(id, req.body);
        res.status(200).send(user);


    }
    //Method to delete a user
    deleteUser = async (req: Request, res: Response) => {
        const id = parseInt(req.params.id);
        const user = await this.userService.deleteUser(id);
        res.status(200).send(user)

    }
}