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
exports.TeamService = void 0;
const BaseRepository_1 = require("../repositories/BaseRepository");
teamRepository: BaseRepository_1.BaseRepository;
class TeamService {
    //Constructor to inject the UserRepository
    constructor(teamRepository) {
        this.teamRepository = teamRepository;
    }
    getAllTeams() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.teamRepository.getEntities();
            return result;
        });
    }
    getTeamById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.teamRepository.getEntityById(id);
            return result;
        });
    }
    createTeam(team) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.teamRepository.createEntity(team);
            return result;
        });
    }
    updateTeam(id, team) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.teamRepository.updateEntity(id, team);
            return result;
        });
    }
    deleteTeam(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.teamRepository.deleteEntity(id);
            return result;
        });
    }
}
exports.TeamService = TeamService;
