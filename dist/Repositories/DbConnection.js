"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = __importDefault(require("pg"));
const pool = new pg_1.default.Pool({
    host: '127.0.0.1',
    user: 'postgres',
    database: 'FaceIt',
    password: 'root123',
    port: parseInt("5432")
});
exports.default = pool;
