import { Router } from "express"
import { BaseRepository } from "../repositories/BaseRepository";
import { Pool } from "pg";
import { Team } from "../Model/team";
import { IBaseRepository } from "../interfaces/IBaseRepository";
import { TeamService } from "../services/TeamService";
import { TeamController } from "../controllers/TeamController";


const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: parseInt('5432')
});




const teamRoutes = Router();

const teamRepository: BaseRepository<Team> = new BaseRepository(pool, "teams");
const teamService: TeamService = new TeamService(teamRepository);
const TeamsController = new TeamController(teamService);

teamRoutes.get('/get', TeamsController.getTeams);
teamRoutes.get('/get/:id', TeamsController.getTeamById);
teamRoutes.post('/create', TeamsController.createTeam);
teamRoutes.put('/update/:id', TeamsController.updateTeam);
teamRoutes.delete('/delete/:id', TeamsController.deleteTeam);


export default teamRoutes;