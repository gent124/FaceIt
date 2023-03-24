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
exports.ViewRepository = void 0;
class ViewRepository {
    constructor(pool, viewName) {
        this.pool = pool;
        this.viewName = viewName;
    }
    showView() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `SELECT * FROM ${this.viewName}`;
            console.log(query);
            const result = yield this.pool.query(query);
            const viewArray = [];
            for (const row of result.rows) {
                viewArray.push(row);
            }
            return viewArray;
        });
    }
}
exports.ViewRepository = ViewRepository;
