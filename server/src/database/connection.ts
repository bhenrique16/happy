import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type:'better-sqlite3',
    database:"src/database/database.sqlite",
    synchronize:true,
    logging:true,
    subscribers:[],
    migrations:[],
})