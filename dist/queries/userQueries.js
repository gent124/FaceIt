"use strict";
// import { Pool, QueryResult } from 'pg';
// import dotenv from 'dotenv';
// import { Request, Response, NextFunction } from 'express';
// import { User } from '../Model/user'
// //Creating instance of database with our database
// const pool = new Pool({
//     host: '127.0.0.1',
//     user: 'postgres',
//     database: 'FaceIt',
//     password: 'root123',
//     port: parseInt(process.env.DB_PORT || "5432")
// });
// //Testing connection of database and server
// pool.connect(err => {
//     if (err) throw err;
//     console.log('Database connected');
// });
// //Method for returning all users from db
// const getUsers = (req: Request, res: Response) => {
//     pool.query('SELECT * FROM users', (error: Error, result: QueryResult) => {
//         if (error) throw error;
//         res.status(200).json(result.rows);
//     });
// };
// // Method for retuning one user from id
// const getUserById = (req: Request, res: Response) => {
//     const id: number = parseInt(req.params.id);
//     pool.query(`SELECT * FROM users WHERE users.id =${id}`, (err: Error, result: QueryResult) => {
//         if (err) throw err;
//         res.status(200).json(result.rows);
//     });
// };
// //Method to create a new user and push it inside the database
// const createUser = (req: Request, res: Response) => {
//     const user: User = req.body[0];
//     pool.query('INSERT INTO users VALUES($1, $2, $3, $4, $5, $6, $7)', [req.params.id, user.username, user.email, user.password, user.date_of_birth, user.country, user.profile_picture],
//         (error: Error, results: QueryResult) => {
//             if (error) console.log(error);
//             res.status(201).send(`User added with ID: ${req.params.id}`);
//         });
// };
// //Method to update an existing user
// const updateUser = (req: Request, res: Response) => {
//     const id: number = parseInt(req.params.id);
//     const user: User = req.body[0];
//     pool.query('UPDATE  users SET username=$1, email=$2, password= $3, date_of_birth=$4, country=$5, profile_picture=$6 WHERE users.id = $7 ', [user.username, user.email, user.password, user.date_of_birth, user.country, user.profile_picture, req.params.id,],
//         (error: Error, results: QueryResult) => {
//             if (error) console.log(error);
//             res.status(201).send(`User updated with ID: ${req.params.id}`);
//         });
// };
// //Method to delete an user based on his id`
// const deleteUser = (req: Request, res: Response) => {
//     const id: number = parseInt(req.params.id);
//     pool.query('DELETE FROM users WHERE id=$1', [id], (err, result) => {
//         if (err) console.log(err);
//         res.status(201).send(`User deleted with id ${id}`);
//     })
// };
// const createUserFromFrontEnd = (req: Request, res: Response) => {
//     const { id, username, email, password, date_of_birth, country, profile_picture } = req.body.user.user;
//     pool.query('INSERT INTO users VALUES($1, $2, $3, $4, $5, $6,$7)', [id, username, email, password, date_of_birth, country, profile_picture],
//         (error, results) => {
//             if (error) console.log(error);
//             res.status(201).send(`User added : ${username}`);
//         });
// }
// module.exports = {
//     getUsers,
//     getUserById,
//     createUser,
//     updateUser,
//     deleteUser,
//     createUserFromFrontEnd
// }
