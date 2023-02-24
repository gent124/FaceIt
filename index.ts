//importing required modules
import express from 'express'
import dotenv from 'dotenv'
import bodyParser, { BodyParser } from 'body-parser';
import userRoutes from './routes/UserRoutes'
import teamRoutes from './routes/TeamRoutes';
import tournamentViewRoute from './routes/ViewRoutes';

//Creating an instance of express
const app = express();
//loads environment variables from .env file
dotenv.config();


//set up middleware for requests bodies
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Defining routes
app.use('/user', userRoutes)
app.use('/team', teamRoutes)
app.use('/tournament', tournamentViewRoute)






//App start and listen to port 5000
const port = process.env.Port
app.listen(5000, () => {
    console.log(`Server is listening on port ${port}`);
});

//exporting the file for use in other modules
export default app;