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
exports.UsersController = void 0;
class UsersController {
    constructor(userService) {
        this.userService = userService;
        //method to get All users 
        this.getUsers = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const users = yield this.userService.getAllUsers();
            res.status(200).json(users);
        });
        // Method to get a sigle user by id
        this.getUserById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            const user = yield this.userService.getUserById(id);
            res.status(200).json(user);
        });
        // //Method to create a user
        this.createUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userService.createUser(req.body);
            console.log(user);
            if (user) {
                res.status(200).send('User Added successfully with user_id ' + req.body.id);
            }
            else {
                res.status(400).send('User not added');
            }
        });
        //Method to update a user
        this.updateUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            const user = yield this.userService.updateUser(id, req.body);
            res.status(200).send(user);
        });
        //Method to delete a user
        this.deleteUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            const user = yield this.userService.deleteUser(id);
            res.status(200).send(user);
        });
    }
}
exports.UsersController = UsersController;
