import { Pool } from "pg";
import { IViewsRepository } from "../interfaces/IVIewsRepository";


export class ViewRepository implements IViewsRepository {
    private viewName: string
    private pool: Pool;


    constructor(pool: Pool, viewName: string) {
        this.pool = pool;
        this.viewName = viewName;
    }

    async showView(): Promise<[]> {
        const query = `SELECT * FROM ${this.viewName}`
        console.log(query);
        const result = await this.pool.query(query)
        const viewArray: any = [];
        for (const row of result.rows) {
            viewArray.push(row);
        }
        return viewArray;
    }

}