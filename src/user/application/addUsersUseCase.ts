import {User} from '../domain/entities/user'
import {UserRepository} from '../domain/repository/userRepository';
import { BcryptHelper } from '../infraestructure/helpers/bcryptHelper';
import { IWebToken } from '../domain/services/WebToken';

export class AddUserUseCase{
    constructor (readonly userRepository: UserRepository, readonly bcryptHelper: BcryptHelper, readonly token: IWebToken) {}
    async run(nombres: string, apellido_paterno: string,apellido_materno:string,email:string, password: string): Promise<User | null>{
        try{
            console.log();
            const hashedPassword = await this.bcryptHelper.encryptPass(password);
            const createUser = await this.userRepository.addUser(nombres, apellido_paterno, apellido_materno,email, hashedPassword);
            return createUser;
        }catch(error){
            console.log("Error en AddUserUseCase" , error);
            return null;
        }
    }
}