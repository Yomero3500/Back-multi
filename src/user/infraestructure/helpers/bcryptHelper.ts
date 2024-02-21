import { BcryptOptions } from "../../domain/services/Bcrypt";
import bcrypt from "bcrypt";

export class BcryptHelper implements BcryptOptions{
    async encryptPass(password:string): Promise<string>{
        const salts= 10;
        let hashPass= await bcrypt.hash(password, salts)
        return hashPass;
    }

    async comparePass(password: string, hashingPassword: string): Promise<boolean> {
        let coincide = await bcrypt.compare(password, hashingPassword);
        return coincide;
    }
}