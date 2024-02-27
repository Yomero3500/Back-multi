import {User} from '../domain/entities/user'
import { UserRepository } from '../domain/repository/userRepository'
import UserModel from './models/userModel'

export class SqlizeUserRepository implements UserRepository{

    async addUser(nombres: string, apellido_paterno: string, apellido_materno:string, email:string, password: string): Promise<User | null>{
        try {
            const createdUser = await UserModel.create({nombres,apellido_paterno, apellido_materno, email, password});
            return new User(createdUser.id ,createdUser.nombres, createdUser.apellido_paterno, createdUser.apellido_materno, createdUser.email, createdUser.password);
        } catch (error) {
            console.log("Error en Sqlize agregarUser>",error);
            return null;
        }
    };

    async getUser(nombres: string, password: string): Promise<User | null> {
        try {
            const searchedUser = await UserModel.findOne({where:{nombres: nombres, password: password}})
            if (searchedUser) {
                return new User(searchedUser.id , searchedUser.nombres, searchedUser.apellido_paterno, searchedUser.apellido_materno, searchedUser.email, searchedUser.password);
            } else {
                return null;
            }
        } catch (error) {
            console.log("Error en Sqlize encontrarUser>",error);
            return null;
        }
    }

    async getUsers(): Promise<User[]> {
        try {
            let users = await UserModel.findAll();
            return users.map(
                (user) =>
                new User(
                    user.id,
                    user.nombres,
                    user.apellido_paterno,
                    user.apellido_materno,
                    user.email,
                    user.password
                )
            )
        } catch (error) {
            return [];
        }
    }
} 