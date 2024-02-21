import {User} from '../domain/entities/user'
import { UserRepository } from '../domain/repository/userRepository'
import UserModel from './models/userModel'

export class SqlizeUserRepository implements UserRepository{

    async addUser(name: string, last_name: string, password: string): Promise<User | null>{
        try {
            const createdUser = await UserModel.create({name, last_name, password});
            return new User(createdUser.id ,createdUser.nombres, createdUser.apellido_paterno, createdUser.apellido_materno, createdUser.password);
        } catch (error) {
            console.log("Error en Sqlte agregarUser>",error);
            return null;
        }
    };

    async getUser(id: number): Promise<User | null> {
        try {
            const searchedUser = await UserModel.findOne({where:{ id: id}})
            if (searchedUser) {
                return new User(searchedUser.id , searchedUser.nombres, searchedUser.apellido_paterno, searchedUser.apellido_materno, searchedUser.password);
            } else {
                return null;
            }
        } catch (error) {
            console.log("Error en Pgsq encontrarUser>",error);
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
                    user.password
                )
            )
        } catch (error) {
            return [];
        }
    }
} 