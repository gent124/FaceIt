const express = require('express');
const app = express();
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
dotenv.config();
const cors = require('cors');
const queries = require('./queries/queries');
import userRoutes from './routes/UserRoutes'
import teamRoutes from './routes/TeamRoutes';
import tournamentViewRoute from './routes/ViewRoutes';
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/user', userRoutes)
app.use('/team', teamRoutes)
app.use('/tournament', tournamentViewRoute)
//App start and listen to port 5000
app.listen(5000, () => {
    console.log(`Server is listening on port ${5000}`);
});


export default app;