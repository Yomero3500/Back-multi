import {User } from '../entities/user'

export interface UserRepository{
    addUser(name: string, last_name: string, password: string): Promise<User | null>;
    getUser(id: number): Promise<User | null>;
    getUsers():Promise<User[]>;
}