import { time } from 'console';
import { Pool } from 'pg';
import { IBaseRepository } from '../interfaces/IBaseRepository';
import { User } from '../model/user'; //Importing the User model
import { BaseRepository } from '../repositories/BaseRepository';//Importing the UserRepository
import { Validator } from '../validator/Validator';

//Declraing an instance of type UserRepository
userRepository: BaseRepository
userValidator: Validator;
export class UserService {
    userRepository: IBaseRepository<User>;

    //Constructor to inject the UserRepository
    constructor(userRepository: IBaseRepository<User>) {
        this.userRepository = userRepository;

    }


    async getAllUsers(): Promise<User[]> {
        const result = await this.userRepository.getEntities()
        return result;
    }

    async getUserById(id: number): Promise<User | null> {
        const result = await this.userRepository.getEntityById(id);
        return result;
    }

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



