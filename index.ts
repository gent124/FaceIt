const express = require('express');
const app = express();
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
dotenv.config();
const cors = require('cors');
const queries = require('./queries/queries');



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Api GET Request to return all Users
app.get('/users', queries.getUsers);
//Api GET request to return one User
app.get('/users/:id', queries.getUserById);
// //POST request to create a new User
app.post('/users', queries.createUser);
// //DELETE request to delete a User
app.delete('/users/:id', queries.deleteUser);

//App start and listen to port 5000
app.listen(5000, () => {
    console.log(`Server is listening on port ${5000}`);
});


export default app;