"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const app = express();
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
dotenv.config();
const cors = require('cors');
const queries = require('./queries/queries');
const UserRoutes_1 = __importDefault(require("./routes/UserRoutes"));
const TeamRoutes_1 = __importDefault(require("./routes/TeamRoutes"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/user', UserRoutes_1.default);
app.use('/team', TeamRoutes_1.default);
//App start and listen to port 5000
app.listen(5000, () => {
    console.log(`Server is listening on port ${5000}`);
});
exports.default = app;
