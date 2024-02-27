import {User } from '../entities/user'

export interface UserRepository{
    addUser(nombres: string, apellido_paterno: string,apellido_materno: string,email:string, password: string): Promise<User | null>;
    getUser(nombres: string, password: string): Promise<User | null>;
    getUsers():Promise<User[]>;
}