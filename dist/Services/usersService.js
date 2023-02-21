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
Object.defineProperty(exports, "__esModule", { value: true });
const userRepository_1 = require("../Repositories/userRepository"); //Importing the UserRepository
//Declraing an instance of type UserRepository
userRepository: userRepository_1.UserRepository;
class UserService {
    //Constructor to inject the UserRepository
    constructor(userRepository) {
        this.userRepository = userRepository;
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
    getAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.userRepository.getEntities();
            return result;
        });
    }
    getUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.userRepository.getEntityById(id);
            return result;
        });
    }
    createUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.userRepository.createEntity(user);
            return result;
        });
    }
    deleteUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.userRepository.deleteEntity(id);
            return result;
        });
    }
}
exports.default = UserService;
