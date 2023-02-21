import request from 'supertest';
import app from '../index';
import UserService from '../Services/usersService';
import { User } from '../Model/user';


describe('UserService', () => {
    let userService: UserService;
    let appServer: request.SuperTest<request.Test>;

    beforeAll(() => {
        // Create a mock UserService instance for the controller
        userService = {
            getUserById: jest.fn().mockResolvedValue({ id: 1, username: 'Gent', email: 'gentraifi14@gmail.com', password: 'tengi123', date_of_birth: '2002-02-03', country: 'Kosovo', profile_picture: 'jpg.png' }),
        } as unknown as UserService;

        // Set up an instance of the app with the mocked UserService
        appServer = request(app(userService));
    });

    it('should retrieve user by ID', async () => {
        const id = 1;
        const expected: User = { username: 'Gent', email: 'gentraifi14@gmail.com', password: 'tengi123', date_of_birth: '2002-02-03', country: 'Kosovo', profile_picture: 'jpg.png' };

        const response = await appServer.get(`/users/${id}`).expect(200);

        expect(response.body).toEqual(expected);
        expect(userService.getUserById).toHaveBeenCalledTimes(1);
        expect(userService.getUserById).toHaveBeenCalledWith(id);
    });
});