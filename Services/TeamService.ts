import { BaseRepository } from "../Repositories/BaseRepository";
import { Team } from "../Model/team";
import { Pool } from "pg";

teamRepository: BaseRepository
export class TeamService {


    teamRepository: BaseRepository<Team>;

    //Constructor to inject the UserRepository
    constructor(teamRepository: BaseRepository<Team>) {
        this.teamRepository = teamRepository;
    }


    async getAllTeams(): Promise<Team[]> {
        const result = await this.teamRepository.getEntities();
        return result;
    }

    async getTeamById(id: number): Promise<Team> {
        const result = await this.teamRepository.getEntityById(id);
        return result;
    }

    async createTeam(team: Team): Promise<Team> {
        const result = await this.teamRepository.createEntity(team);
        return result;
    }

    async updateTeam(id: number, team: Team): Promise<Team> {
        const result = await this.teamRepository.updateEntity(id, team);
        return result;
    }

    async deleteTeam(id: number): Promise<Team> {
        const result = await this.teamRepository.deleteEntity(id);
        return result;
    }


}