import { time } from 'console';
import { Pool } from 'pg';
import { User } from '../Model/user'; //Importing the User model
import { BaseRepository } from '../Repositories/BaseRepository';//Importing the UserRepository


//Declraing an instance of type UserRepository
userRepository: BaseRepository

export class UserService {
    userRepository: BaseRepository<User>;

    //Constructor to inject the UserRepository
    constructor(userRepository: BaseRepository<User>) {
        this.userRepository = userRepository;
    }

    async getAllUsers(): Promise<User[]> {
        console.log("Inside the user service")
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

    async updateUser(id: number, user: User): Promise<User> {
        const result = await this.userRepository.updateEntity(id, user);
        return result;
    }
    async deleteUser(id: number) {
        const result = await this.userRepository.deleteEntity(id);
        return result;
    }
}