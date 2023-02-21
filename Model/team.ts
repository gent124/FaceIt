export class Team {
    team_name: String;
    leader_id: number;

    constructor(team_name: String, leader_id: number) {
        this.team_name = team_name;
        this.leader_id = leader_id;
    }
}