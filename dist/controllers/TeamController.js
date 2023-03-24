"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamController = void 0;
class TeamController {
    constructor(teamService) {
        this.teamService = teamService;
        this.getTeams = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const team = yield this.teamService.getAllTeams();
            res.status(200).json(team);
        });
        this.getTeamById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            const team = yield this.teamService.getTeamById(id);
            res.status(200).json(team);
        });
        this.createTeam = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const team = yield this.teamService.createTeam(req.body);
            res.status(201).json(team);
        });
        this.updateTeam = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            const team = yield this.teamService.updateTeam(id, req.body);
            res.status(200).json(team);
        });
        this.deleteTeam = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            const team = yield this.teamService.deleteTeam(id);
            res.status(200).json(team);
        });
    }
}
exports.TeamController = TeamController;
