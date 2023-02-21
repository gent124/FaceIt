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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const index_1 = __importDefault(require("../index"));
describe('UserService', () => {
    let userService;
    let appServer;
    beforeAll(() => {
        // Create a mock UserService instance for the controller
        userService = {
            getUserById: jest.fn().mockResolvedValue({ id: 1, username: 'Gent', email: 'gentraifi14@gmail.com', password: 'tengi123', date_of_birth: '2002-02-03', country: 'Kosovo', profile_picture: 'jpg.png' }),
        };
        // Set up an instance of the app with the mocked UserService
        appServer = (0, supertest_1.default)((0, index_1.default)(userService));
    });
    it('should retrieve user by ID', () => __awaiter(void 0, void 0, void 0, function* () {
        const id = 1;
        const expected = { username: 'Gent', email: 'gentraifi14@gmail.com', password: 'tengi123', date_of_birth: '2002-02-03', country: 'Kosovo', profile_picture: 'jpg.png' };
        const response = yield appServer.get(`/users/${id}`).expect(200);
        expect(response.body).toEqual(expected);
        expect(userService.getUserById).toHaveBeenCalledTimes(1);
        expect(userService.getUserById).toHaveBeenCalledWith(id);
    }));
});
