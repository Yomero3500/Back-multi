import {User} from '../domain/entities/user'
import {UserRepository} from '../domain/repository/userRepository'

export class GetUserUseCase{
    constructor (readonly userRepository: UserRepository){}
    async run(id: number): Promise<User | null>{
        try{
            const searchedUserUser = await this.userRepository.getUser( id);
            return searchedUserUser;
        }catch(error){
            console.log("Error en AddUserUseCase" , error);
            return null;
        }
    }
}