import { time } from 'console';
import { Pool } from 'pg';
import { IBaseRepository } from '../interfaces/IBaseRepository';
import { User } from '../model/user'; //Importing the User model
import { BaseRepository } from '../repositories/BaseRepository';//Importing the UserRepository
import { Validator } from '../validator/Validator';

//Declraing an instance of type UserRepository
userRepository: BaseRepository
//Creating a new intance of type userValidator to use for validation in functions
userValidator: Validator;
export class UserService {
    userRepository: IBaseRepository<User>;

    //Constructor to inject the UserRepository
    constructor(userRepository: IBaseRepository<User>) {
        //initializing the userRepository
        this.userRepository = userRepository;

    }

    //Defining the function getAllUsers that don't take any parameters and returns a Promise of type User[]
    async getAllUsers(): Promise<User[]> {
        const result = await this.userRepository.getEntities()
        return result;
    }
    //Defining the getUserById that takes 1 parameter the id of user and return the user based on its id
    async getUserById(id: number): Promise<User | null> {
        const result = await this.userRepository.getEntityById(id);
        return result;
    }
    //Defining the createUser function that acepts the id and the user as object and validates it throught Validator Class and than returns that user if it's added or returns null otherwise
    async createUser(id: number, user: User): Promise<User | null> {
        const userValidator = new Validator(user);
        console.log(userValidator.validateUser())

        if (id) {
            const existingId = await this.userRepository.getEntityById(id);
            if (existingId) {
                throw new Error('User already exists');
            } else {
                if (userValidator.validateUser()) {
                    const result = await this.userRepository.createEntity(user);
                    return result;
                }
            }
        }


        return null;
    }

    //Defining the updateUser function that acepts the id and the user as object and validates it throught Validator Class and than returns that user if it's updated or returns null otherwise
    async updateUser(id: number, user: User): Promise<User | null> {
        const userValidator = new Validator(user);
        if (userValidator.validateUser()) {
            const result = await this.userRepository.updateEntity(id, user);
            return result;
        }
        return null;
    }
    async deleteUser(id: number) {
        const result = await this.userRepository.deleteEntity(id);
        return result;
    }




}



