import { table } from 'console';
import { Pool } from 'pg' //Importing postgres from pg library
import { User } from '../model/user';
import { IBaseRepository } from '../interfaces/IBaseRepository';
import { Team } from '../model/team';
//Exporting UserRepositories class
export class BaseRepository<T extends object> implements IBaseRepository<T> {
    //Declaring a pool variable of the pg.Pool type
    private pool: Pool;
    private tableName: string;
    //constructor to initialize the database connection 
    constructor(pool: Pool, tableName: string) {
        this.pool = pool;
        this.tableName = tableName;
        //Tests the connection with database and returns the error if not connected or prints in console that the db is connected
        this.pool.connect(function (err) {
            if (err) throw err;
        });
    }


    //getEntities returns all the entities based on the table that is declared
    async getEntities(): Promise<T[]> {

        const result = await this.pool.query(`Select * from ${this.tableName}`);
        console.log("inside the repository")
        return result.rows;
    }
    //returns an entity by id 
    async getEntityById(id: number): Promise<T> {
        const result = await this.pool.query(`Select * from ${this.tableName} where id = ${id}`);
        return result.rows[0];
    }
    //creates a new record in the database
    async createEntity(entity: T): Promise<T> {
        const table_keys = Object.keys(entity).join(', ');
        const table_values = Object.values(entity);
        //Checks the type of the value and if it string wraps it with '' and returns it
        const parsedValues = table_values.map(value => {
            if (typeof value === 'string') {
                return `'${value}'`;
            } else {
                return value;
            }
        }
        ).join(', ');

        const query = `INSERT INTO ${this.tableName} (${table_keys}) VALUES (${parsedValues}) RETURNING *;`;
        const result = await this.pool.query(query);
        return result.rows[0];
    }

    //updates an entity by id
    async updateEntity(id: number, entity: T): Promise<T> {
        const _id = await id;
        const table_keys = Object.keys(entity);//get the column names based on the table that is initalized
        const table_values = Object.values(entity); // get the column values based on the table req.bodys
        const parsedValuesArray: any = [];
        //Checks the type of the value and if it string wraps it with '' and pushes it into the array
        const parsedValues = table_values.map(value => {
            if (typeof value === 'string') {
                parsedValuesArray.push(`'${value}'`);
            } else {
                parsedValuesArray.push(value);
            }
        }
        ).join(', ');

        let setClause = "";
        //iterates over the table_keys  and sets in the correct format to query in database Set column1 = value1
        for (let i = 0; i < table_keys.length; i++) {
            if (i > 0) {
                setClause += ", ";
            }
            setClause += `${table_keys[i]} = ${parsedValuesArray[i]}`;
        }
        const query = `UPDATE ${this.tableName} SET ${setClause} WHERE id = ${_id} RETURNING *; `;
        console.log(query);
        const result = await this.pool.query(query);

        return result.rows[0];

    }

    // deletes a record from the database and returns the deleted record
    async deleteEntity(id: number): Promise<T> {
        const result = await this.pool.query('DELETE FROM users WHERE id = $1 RETURNING *', [id]);
        return result.rows[0];
    }





}