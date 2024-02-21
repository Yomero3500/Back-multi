export interface BcryptRepository {
    encryptPass(password:string): Promise<string>;
    comparePass(password:string, hashingPassword: string): Promise<boolean>;
}