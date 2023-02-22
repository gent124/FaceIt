import { Request, Response } from "express";
import { TeamService } from "../services/TeamService";

export class TeamController<Team> {
    constructor(
        private readonly teamService: TeamService
    ) { }



    getTeams = async (req: Request, res: Response) => {
        const team = await this.teamService.getAllTeams();
        res.status(200).json(team);
    };


    getTeamById = async (req: Request, res: Response) => {
        const id = parseInt(req.params.id);
        const team = await this.teamService.getTeamById(id);
        res.status(200).json(team);

    }

    createTeam = async (req: Request, res: Response) => {
        const team = await this.teamService.createTeam(req.body);
        res.status(201).json(team);
    };

    updateTeam = async (req: Request, res: Response) => {
        const id = parseInt(req.params.id);
        const team = await this.teamService.updateTeam(id, req.body);
        res.status(200).json(team);
    };

    deleteTeam = async (req: Request, res: Response) => {
        const id = parseInt(req.params.id);
        const team = await this.teamService.deleteTeam(id);
        res.status(200).json(team);
    };



}