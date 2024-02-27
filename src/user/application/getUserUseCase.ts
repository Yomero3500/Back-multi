import {User} from '../domain/entities/user'
import {UserRepository} from '../domain/repository/userRepository'
import { BcryptHelper } from '../infraestructure/helpers/bcryptHelper';

export class GetUserUseCase{
    constructor (readonly userRepository: UserRepository, readonly bcrypt: BcryptHelper){}
    async run(nombres: string, password: string): Promise<User | null>{
        try{
            const searchedUserUser = await this.userRepository.getUser(nombres, password);
            if (searchedUserUser) {
                let pass = searchedUserUser.password;
                const pass2 = await this.bcrypt.comparePass(password, pass);
                console.log(pass2);
                if (pass2) {
                    return searchedUserUser
                }else{
                    return null;
                }
                
            } else {
                return null;
            }
        }catch(error){
            console.log("Error en AddUserUseCase" , error);
            return null;
        }
    }
}