"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//importing required modules
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const body_parser_1 = __importDefault(require("body-parser"));
const UserRoutes_1 = __importDefault(require("./routes/UserRoutes"));
const TeamRoutes_1 = __importDefault(require("./routes/TeamRoutes"));
const ViewRoutes_1 = __importDefault(require("./routes/ViewRoutes"));
//Creating an instance of express
const app = (0, express_1.default)();
//loads environment variables from .env file
dotenv_1.default.config();
//set up middleware for requests bodies
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
//Defining routes
app.use('/user', UserRoutes_1.default);
app.use('/team', TeamRoutes_1.default);
app.use('/tournament', ViewRoutes_1.default);
//App start and listen to port 5000
const port = process.env.Port;
app.listen(5000, () => {
    console.log(`Server is listening on port ${port}`);
});
//exporting the file for use in other modules
exports.default = app;
