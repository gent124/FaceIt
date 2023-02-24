import { UserService } from "../services/UserService";
import { BaseRepository } from "../repositories/BaseRepository";
import { User } from "../model/user";
import { Pool } from "pg";
import { describe, expect, test } from '@jest/globals';

describe('UserService', () => {
    let userService: UserService;
    let userRepository: BaseRepository<User>;
    let mockPool: Pool
    let mockTableName: string;
    // let mockTableName = 'users';l
    beforeEach(() => {
        mockPool = new Pool({});
        userRepository = new BaseRepository(mockPool, mockTableName);
        userService = new UserService(userRepository);



    });


    describe('getAllUsers', () => {
        it('returns all users from the repository', async () => {
            const mockUsers = [
                { id: 1, username: 'Alice', email: 'foo@bar.com', password: "adas", date_of_birth: '1999-01-01', country: 'United States', profile_picture: 'http://phtoto.jpg' },
                { id: 1, username: 'Alice', email: 'foo@bar.com', password: "adas", date_of_birth: '1999-01-01', country: 'United States', profile_picture: 'http://phtoto.jpg' }
            ];
            jest.spyOn(userRepository, 'getEntities').mockResolvedValue(mockUsers);
            console.log(mockUsers)
            const expectedUsers = [
                { id: 1, username: 'Alice', email: 'foo@bar.com', password: "adas", date_of_birth: '1999-01-01', country: 'United States', profile_picture: 'http://phtoto.jpg' },
                { id: 1, username: 'Alice', email: 'foo@bar.com', password: "adas", date_of_birth: '1999-01-01', country: 'United States', profile_picture: 'http://phtoto.jpg' }
            ];
            const actualUsers = await userService.getAllUsers();
            console.log(actualUsers);

            expect(actualUsers).toEqual(expectedUsers);
            expect(userRepository.getEntities).toHaveBeenCalledTimes(1);
        });
    });


    describe('getUsersById', () => {
        it("should return a single user based on its id", async () => {

            const mockedUser = { id: 5, username: 'Alice', email: 'foo@bar.com', password: "adas", date_of_birth: '1999-01-01', country: 'United States', profile_picture: 'http://phtoto.jpg' };

            jest.spyOn(userRepository, 'getEntityById').mockResolvedValue(mockedUser);
            console.log(mockedUser);

            const expectedUser = { id: 5, username: 'Alice', email: 'foo@bar.com', password: "adas", date_of_birth: '1999-01-01', country: 'United States', profile_picture: 'http://phtoto.jpg' };
            console.log(expectedUser);

            const actualUser = await userService.getUserById(5);

            expect(actualUser).toEqual(expectedUser);
            expect(userRepository.getEntityById).toHaveBeenCalledTimes(1)





        });
    });


    describe('createUser', () => {
        it('should validate and  create a user', async () => {
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

            const creatingUser = await userRepository.createEntity(createdUser)
            console.log(creatingUser);

            expect(creatingUser).toBe(createdUser);
            expect(userRepository.createEntity).toHaveBeenCalledTimes(1);



        })
    })


    describe('updateUser', () => {

    })
});



