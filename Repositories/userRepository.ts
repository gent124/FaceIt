import { table } from 'console';
import { Pool } from 'pg' //Importing postgres from pg library
import { User } from '../Model/user';
import { IBaseRepository } from '../Repositories/baseRepository';

//Exporting UserRepositories class
export class UserRepository<T extends User> implements IBaseRepository<User> {
    //Declaring a pool variable of the pg.Pool type
    private pool: Pool;
    private tableName: string;
    //constructor to initialize the database connection 
    constructor(pool: Pool, tableName: string) {
        this.pool = pool;

        this.tableName = tableName;

        this.pool.connect(function (err) {
            if (err) throw err;
            console.log("Connected!");
        });
    }



    async getEntities(): Promise<User[]> {

        const result = await this.pool.query(`Select * from ${this.tableName}`);
        console.log(this.tableName)
        return result.rows;
    }

    async getEntityById(id: number): Promise<User> {
        const result = await this.pool.query(`Select * from ${this.tableName} where id = ${id}`);
        console.log(this.tableName)
        return result.rows[0];
    }

    async createEntity(entity: User): Promise<User> {
        const table_keys = Object.keys(entity).join(', ');
        const table_values = Object.values(entity);
        const parsedValues = table_values.map(value => {
            // console.log(typeof value)
            if (typeof value === 'string') {
                return `'${value}'`;
            } else {
                return value;
            }
        }
        ).join(', ');
        // console.log(table_keys);
        // console.log(table_values);
        // console.log(parsedValues);
        // console.log(this.tableName);
        const query = `INSERT INTO ${this.tableName} (${table_keys}) VALUES (${parsedValues}) RETURNING *;`;

        // console.log(`INSERT INTO ${this.tableName} (${table_keys}) VALUES (${parsedValues}) RETURNING *`);
        console.log(query)
        const result = await this.pool.query(query);
        return result.rows[0];
    }

    async updateEntity(id: number, entity: User): Promise<User> {
        const result = await this.pool.query('DELETE FROM users WHERE id = $1 RETURNING *', [id]);
        return result.rows[0];


    }

    async deleteEntity(id: number): Promise<User> {
        const result = await this.pool.query('DELETE FROM users WHERE id = $1 RETURNING *', [id]);
        return result.rows[0];
    }




    // }
    // //Function to query the database and return all users
    // async getAll() {

    // }
    // //Function to query the database and return one user based on the parameter

    // async getById(id: number) {
    //     return await this.pool.query('SELECT * FROM users WHERE id = $1', [id])

    // }

    // //Function to create a new user and push it to the database and return it
    // async createUser(user: User): Promise<User> {
    //     const query = {
    //         text: 'INSERT INTO users(username, email, password, date_of_birth, country, profile_picture) VALUES($1, $2, $3, $4, $5, $6) RETURNING * ',
    //         values: [user.username, user.email, user.password, user.date_of_birth, user.country, user.profile_picture]
    //     }
    //     const result = await this.pool.query(query);
    //     return result.rows[0];
    // };

    // //Function to delete a user from the database and return it if exists
    // async deleteUser(id: number) {
    //     const result = await this.pool.query('DELETE FROM users WHERE id = $1 RETURNING * ', [id]);
    //     if (result.rows.length === 0) {
    //         console.log('No users found');
    //     }
    //     return result.rows;

    // };


}