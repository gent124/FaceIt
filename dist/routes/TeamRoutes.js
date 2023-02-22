"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const BaseRepository_1 = require("../repositories/BaseRepository");
const pg_1 = require("pg");
const TeamService_1 = require("../services/TeamService");
const TeamController_1 = require("../controllers/TeamController");
const pool = new pg_1.Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: parseInt('5432')
});
const teamRoutes = (0, express_1.Router)();
const teamRepository = new BaseRepository_1.BaseRepository(pool, "teams");
const teamService = new TeamService_1.TeamService(teamRepository);
const TeamsController = new TeamController_1.TeamController(teamService);
teamRoutes.get('/get', TeamsController.getTeams);
teamRoutes.get('/get/:id', TeamsController.getTeamById);
teamRoutes.post('/create', TeamsController.createTeam);
teamRoutes.put('/update/:id', TeamsController.updateTeam);
teamRoutes.delete('/delete/:id', TeamsController.deleteTeam);
exports.default = teamRoutes;
