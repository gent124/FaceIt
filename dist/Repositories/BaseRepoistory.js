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
exports.BaseRepoistory = void 0;
//Exporting UserRepositories class
class BaseRepoistory {
    //constructor to initialize the database connection 
    constructor(pool, tableName) {
        this.pool = pool;
        this.tableName = tableName;
        if (this.pool) {
            console.log("Database connection established");
        }
    }
    getEntities() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.pool.query(`Select * from ${this.tableName}`);
            console.log(this.tableName);
            return result.rows;
        });
    }
    getEntityById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.pool.query(`Select * from ${this.tableName} where id = ${id}`);
            console.log(this.tableName);
            return result.rows[0];
        });
    }
    createEntity(entity) {
        return __awaiter(this, void 0, void 0, function* () {
            const table_keys = Object.keys(entity).join(', ');
            const table_values = Object.values(entity).join(', ');
            console.log(table_keys);
            console.log(table_values);
            const result = yield this.pool.query(`INSERT INTO (${table_keys}) VALUES (${table_values})`);
            return result.rows[0];
        });
    }
    updateEntity(id, entity) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.pool.query('DELETE FROM users WHERE id = $1 RETURNING *', [id]);
            return result.rows[0];
        });
    }
    deleteEntity(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.pool.query('DELETE FROM users WHERE id = $1 RETURNING *', [id]);
            return result.rows[0];
        });
    }
}
exports.BaseRepoistory = BaseRepoistory;
