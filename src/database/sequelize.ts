import { Sequelize } from "sequelize-typescript";
import dotenv from "dotenv";
import UserModel from "../user/infraestructure/models/userModel";
dotenv.config();

export const sequelize = new Sequelize({
    dialect: "mysql",
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: 3306,
    models: [UserModel],
});

export async function initialDataBase() {
    try {
        console.log(process.env.DB_HOST);
        await sequelize.authenticate();
        console.log('Conection established successfully');
        await sequelize.sync({force: false});
    } catch (error) {
        console.log(' No se pudo conectar a la base de datos', error);
        process.exit(1);
    }
}