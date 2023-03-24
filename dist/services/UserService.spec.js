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
const UserService_1 = require("../services/UserService");
const BaseRepository_1 = require("../repositories/BaseRepository");
const pg_1 = require("pg");
const globals_1 = require("@jest/globals");
(0, globals_1.describe)('UserService', () => {
    let userService;
    let userRepository;
    let mockPool;
    let mockTableName;
    beforeEach(() => {
        mockPool = new pg_1.Pool({});
        userRepository = new BaseRepository_1.BaseRepository(mockPool, mockTableName);
        userService = new UserService_1.UserService(userRepository);
    });
    (0, globals_1.describe)('getAllUsers', () => {
        it('returns all users from the repository', () => __awaiter(void 0, void 0, void 0, function* () {
            const mockUsers = [
                { id: 1, username: 'Alice', email: 'foo@bar.com', password: "adas", date_of_birth: '1999-01-01', country: 'United States', profile_picture: 'http://phtoto.jpg' },
                { id: 1, username: 'Alice', email: 'foo@bar.com', password: "adas", date_of_birth: '1999-01-01', country: 'United States', profile_picture: 'http://phtoto.jpg' }
            ];
            jest.spyOn(userRepository, 'getEntities').mockResolvedValue(mockUsers);
            console.log(mockUsers);
            const expectedUsers = [
                { id: 1, username: 'Alice', email: 'foo@bar.com', password: "adas", date_of_birth: '1999-01-01', country: 'United States', profile_picture: 'http://phtoto.jpg' },
                { id: 1, username: 'Alice', email: 'foo@bar.com', password: "adas", date_of_birth: '1999-01-01', country: 'United States', profile_picture: 'http://phtoto.jpg' }
            ];
            const actualUsers = yield userService.getAllUsers();
            console.log(actualUsers);
            (0, globals_1.expect)(actualUsers).toEqual(expectedUsers);
            (0, globals_1.expect)(userRepository.getEntities).toHaveBeenCalledTimes(1);
        }));
    });
    (0, globals_1.describe)('getUsersById', () => {
        it("should return a single user based on its id", () => __awaiter(void 0, void 0, void 0, function* () {
            const mockedUser = { id: 5, username: 'Alice', email: 'foo@bar.com', password: "adas", date_of_birth: '1999-01-01', country: 'United States', profile_picture: 'http://phtoto.jpg' };
            jest.spyOn(userRepository, 'getEntityById').mockResolvedValue(mockedUser);
            console.log(mockedUser);
            const expectedUser = { id: 5, username: 'Alice', email: 'foo@bar.com', password: "adas", date_of_birth: '1999-01-01', country: 'United States', profile_picture: 'http://phtoto.jpg' };
            console.log(expectedUser);
            const actualUser = yield userService.getUserById(5);
            (0, globals_1.expect)(actualUser).toEqual(expectedUser);
            (0, globals_1.expect)(userRepository.getEntityById).toHaveBeenCalledTimes(1);
        }));
    });
    (0, globals_1.describe)('createUser', () => {
        it('should validate and  create a user', () => __awaiter(void 0, void 0, void 0, function* () {
            const createdUser = {
                "id": 4,
                "username": "tng123",
                "email": "gent12@gmail.com",
                "password": "hellcase155",
                "date_of_birth": "1999-06-05T22:00:00.000Z",
                "country": "USA",
                "profile_picture": "https://hello123.com"
            };
            jest.spyOn(userRepository, 'createEntity').mockResolvedValue(createdUser);
            console.log(createdUser);
            const creatingUser = yield userRepository.createEntity(createdUser);
            console.log(creatingUser);
            (0, globals_1.expect)(creatingUser).toBe(createdUser);
            (0, globals_1.expect)(userRepository.createEntity).toHaveBeenCalledTimes(1);
        }));
    });
    (0, globals_1.describe)('updateUser', () => {
        it('should validate and  create a user', () => __awaiter(void 0, void 0, void 0, function* () {
            const updateUser = {
                "id": 4,
                "username": "tng123",
                "email": "gent12@gmail.com",
                "password": "hellcase155",
                "date_of_birth": "1999-06-05T22:00:00.000Z",
                "country": "USA",
                "profile_picture": "https://hello123.com"
            };
            jest.spyOn(userRepository, 'updateEntity').mockResolvedValue(updateUser);
            console.log(updateUser);
            const updatingUser = yield userRepository.updateEntity(4, updateUser);
            console.log(updatingUser);
            (0, globals_1.expect)(updatingUser).toBe(updateUser);
            (0, globals_1.expect)(userRepository.updateEntity).toHaveBeenCalledTimes(1);
        }));
    });
    (0, globals_1.describe)('deleteUser', () => {
        it('should delete a user', () => __awaiter(void 0, void 0, void 0, function* () {
            const user = {
                "id": 4,
                "username": "tng123",
                "email": "gent12@gmail.com",
                "password": "hellcase155",
                "date_of_birth": "1999-06-05T22:00:00.000Z",
                "country": "USA",
                "profile_picture": "https://hello123.com"
            };
            jest.spyOn(userRepository, 'deleteEntity').mockResolvedValue(user);
            const deletingUser = yield userRepository.deleteEntity(4);
            (0, globals_1.expect)(user).toEqual(deletingUser);
            (0, globals_1.expect)(userRepository.deleteEntity).toHaveBeenCalledTimes(1);
        }));
    });
});
