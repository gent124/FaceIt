import { Request, Response } from "express";
import TournamentViewService from '../services/TournamentViewService'


export class TournamentViewController {
    constructor(
        private tournamentService: TournamentViewService
    ) { }


    showTournamentGames = async (req: Request, res: Response) => {
        console.log("showTournamentGames")
        const tournamentGames = await this.tournamentService.showTournamentGames();
        res.status(200).json(tournamentGames);
    }



}