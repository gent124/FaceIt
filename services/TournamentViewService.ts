import { ViewRepository } from "../repositories/ViewRepository";

torunamentViewRepositoy: ViewRepository;
export default class TournamentViewService {

    tournamentViewRepository: ViewRepository;

    constructor(tournamentViewRepository: ViewRepository) {
        this.tournamentViewRepository = tournamentViewRepository;
    }



    async showTournamentGames(): Promise<[]> {

        return await this.tournamentViewRepository.showView();
    }

}