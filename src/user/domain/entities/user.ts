export class User {
    constructor(
        readonly id: number,
        readonly nombres: string,
        readonly apellido_paterno: string,
        readonly apellido_materno: string,
        readonly email : string,
        readonly password: string
    ) {}
}