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
exports.BaseRepository = void 0;
//Exporting UserRepositories class
class BaseRepository {
    //constructor to initialize the database connection 
    constructor(pool, tableName) {
        this.pool = pool;
        this.tableName = tableName;
        //Tests the connection with database and returns the error if not connected or prints in console that the db is connected
        this.pool.connect(function (err) {
            // if (err) throw err;
        });
    }
    // Another fake commit
    // FAKE COMMIT COMMENT
    //getEntities returns all the entities based on the table that is declared
    getEntities() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.pool.query(`Select * from ${this.tableName}`);
            console.log("inside the repository");
            return result.rows;
        });
    }
    //returns an entity by id 
    getEntityById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.pool.query(`Select * from ${this.tableName} where id = ${id}`);
            return result.rows[0];
        });
    }
    //creates a new record in the database
    createEntity(entity) {
        return __awaiter(this, void 0, void 0, function* () {
            const table_keys = Object.keys(entity).join(', ');
            const table_values = Object.values(entity);
            //Checks the type of the value and if it string wraps it with '' and returns it
            const parsedValues = table_values.map(value => {
                if (typeof value === 'string') {
                    return `'${value}'`;
                }
                else {
                    return value;
                }
            }).join(', ');
            const query = `INSERT INTO ${this.tableName} (${table_keys}) VALUES (${parsedValues}) RETURNING *;`;
            const result = yield this.pool.query(query);
            return result.rows[0];
        });
    }
    //updates an entity by id
    updateEntity(id, entity) {
        return __awaiter(this, void 0, void 0, function* () {
            const _id = yield id;
            const table_keys = Object.keys(entity); //get the column names based on the table that is initalized
            const table_values = Object.values(entity); // get the column values based on the table req.bodys
            const parsedValuesArray = [];
            //Checks the type of the value and if it string wraps it with '' and pushes it into the array
            const parsedValues = table_values.map(value => {
                if (typeof value === 'string') {
                    parsedValuesArray.push(`'${value}'`);
                }
                else {
                    parsedValuesArray.push(value);
                }
            }).join(', ');
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
            const result = yield this.pool.query(query);
            return result.rows[0];
        });
    }
    // deletes a record from the database and returns the deleted record
    deleteEntity(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.pool.query('DELETE FROM users WHERE id = $1 RETURNING *', [id]);
            return result.rows[0];
        });
    }
}
exports.BaseRepository = BaseRepository;
