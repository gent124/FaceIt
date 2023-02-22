"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ViewRepository_1 = require("../repositories/ViewRepository");
const pg_1 = require("pg");
const TournamentViewService_1 = __importDefault(require("../services/TournamentViewService"));
const TournamentViewController_1 = require("../controllers/TournamentViewController");
const pool = new pg_1.Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: parseInt('5432')
});
const tournamentViewRoute = (0, express_1.Router)();
const tournamentGamesRepository = new ViewRepository_1.ViewRepository(pool, 'torunament_games_view');
const tournamentViewService = new TournamentViewService_1.default(tournamentGamesRepository);
const tournamentViewController = new TournamentViewController_1.TournamentViewController(tournamentViewService);
tournamentViewRoute.get('/get', tournamentViewController.showTournamentGames);
exports.default = tournamentViewRoute;
