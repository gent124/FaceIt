import { Router } from "express";
import { ViewRepository } from "../repositories/ViewRepository";
import { Pool } from "pg";
import { IViewsRepository } from "../interfaces/IVIewsRepository";
import TournamentViewService from "../services/TournamentViewService";
import { TournamentViewController } from "../controllers/TournamentViewController";

const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: parseInt('5432')
});
const tournamentViewRoute = Router();

const tournamentGamesRepository: ViewRepository = new ViewRepository(pool, 'torunament_games_view');
const tournamentViewService = new TournamentViewService(tournamentGamesRepository);
const tournamentViewController = new TournamentViewController(tournamentViewService);

tournamentViewRoute.get('/get', tournamentViewController.showTournamentGames);

export default tournamentViewRoute;