import {Request, Response} from "express";
import { AddUserUseCase } from "../../application/addUsersUseCase";

export class AddUserController{
    constructor( readonly addUserUseCase: AddUserUseCase){}
    async run (req: Request, res: Response){
        try {
            let {name, last_name, password} = req.body;
            let createdUser = await this.addUserUseCase.run(name, last_name, password);   
            if (createdUser){
                return res.status(200).send({
                    status: "success",
                    data:{
                        name: createdUser.nombres,
                        apellido_paterno: createdUser.apellido_paterno,
                        apellido_materno: createdUser.apellido_materno,
                        password: createdUser.password
                    },
                    message:" Usuario creado"
                })
            }else{
                return res.status(400).send({
                    status: "Error",
                    data: [],
                    message: "Error al Crear Usuario"
                }) 
            }
        } catch (error) {
            console.log("Error en userController",error);
            res.status(500).send({
                status: "error",
                message: "Error en Server"
            })
        }
    }
}