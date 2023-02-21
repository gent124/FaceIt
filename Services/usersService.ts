import { User } from '../Model/user'; //Importing the User model
import { UserRepository } from '../Repositories/userRepository';//Importing the UserRepository


//Declraing an instance of type UserRepository
userRepository: UserRepository

export default class UserService {
    //Constructor to inject the UserRepository
    constructor(private userRepository: UserRepository<User>) {
    }
    //Async function to access the UserRepository instance method getAll storing it in the result object than returning the rows of the result from db
    // async getAllUsers(): Promise<User[]> {
    //     const result = await this.userRepository.findAll();
    //     return result.rows;
    // }
    // //Async function to access the UserRepository instance method getById storing it in the result object than returning the first row of the result from db

    // async getUserById(id: string): Promise<User | null> {
    //     const result = await this.userRepository.findById(id);
    //     if (result.rows.length === 0) {
    //         console.log("User not found");
    //         return null;
    //     }
    //     return result.rows[0];
    // }

    // //Async function to create a new user
    // async createUser(user: User): Promise<User> {
    //     const result = await this.userRepository.create(user);
    //     return result;

    // }

    // //Async function to delete a user
    // async deleteUser(id: number) {
    //     const result = await this.userRepository.delete(id);
    //     return result;
    // }

    async getAllUsers(): Promise<User[]> {
        const result = await this.userRepository.getEntities()
        return result;
    }


    async getUserById(id: number): Promise<User | null> {
        const result = await this.userRepository.getEntityById(id);
        return result;
    }

    async createUser(user: User): Promise<User> {
        const result = await this.userRepository.createEntity(user);
        return result;
    }
}