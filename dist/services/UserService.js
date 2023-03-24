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
exports.UserService = void 0;
const BaseRepository_1 = require("../repositories/BaseRepository"); //Importing the UserRepository
const Validator_1 = require("../validator/Validator");
//Declraing an instance of type UserRepository
userRepository: BaseRepository_1.BaseRepository;
//Creating a new intance of type userValidator to use for validation in functions
userValidator: Validator_1.Validator;
class UserService {
    //Constructor to inject the UserRepository
    constructor(userRepository) {
        //initializing the userRepository
        this.userRepository = userRepository;
    }
    //Defining the function getAllUsers that don't take any parameters and returns a Promise of type User[]
    getAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.userRepository.getEntities();
            return result;
        });
    }
    //Defining the getUserById that takes 1 parameter the id of user and return the user based on its id
    getUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.userRepository.getEntityById(id);
            return result;
        });
    }
    //Defining the createUser function that acepts the id and the user as object and validates it throught Validator Class and than returns that user if it's added or returns null otherwise
    createUser(id, user) {
        return __awaiter(this, void 0, void 0, function* () {
            const userValidator = new Validator_1.Validator(user);
            console.log(userValidator.validateUser());
            if (id) {
                const existingId = yield this.userRepository.getEntityById(id);
                if (existingId) {
                    throw new Error('User already exists');
                }
                else {
                    if (userValidator.validateUser()) {
                        const result = yield this.userRepository.createEntity(user);
                        return result;
                    }
                }
            }
            return null;
        });
    }
    //Defining the updateUser function that acepts the id and the user as object and validates it throught Validator Class and than returns that user if it's updated or returns null otherwise
    updateUser(id, user) {
        return __awaiter(this, void 0, void 0, function* () {
            const userValidator = new Validator_1.Validator(user);
            if (userValidator.validateUser()) {
                const result = yield this.userRepository.updateEntity(id, user);
                return result;
            }
            return null;
        });
    }
    deleteUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.userRepository.deleteEntity(id);
            return result;
        });
    }
}
exports.UserService = UserService;
