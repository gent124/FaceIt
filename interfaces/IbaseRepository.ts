export interface IBaseRepository<T> {
    getEntities(): Promise<T[]>;
    getEntityById(id: number): Promise<T>;
    createEntity(entity: T): Promise<T>;
    updateEntity(id: number, entity: T): Promise<T>;
    deleteEntity(id: number): Promise<T>;
}