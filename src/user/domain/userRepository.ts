import {User } from './user'

export interface UserRepository{
    addUser(name: string, last_name: string, password: string): Promise<User | null>;
    getUser(id: number): Promise<User | null>;
}