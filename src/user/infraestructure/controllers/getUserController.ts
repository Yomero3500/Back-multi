import {Request, Response} from "express";
import { GetUserUseCase } from "../../application/getUserUseCase";

export class GetUserController{
    constructor( readonly getUserUseCase: GetUserUseCase){}
    async run (req: Request, res: Response){
        try {
            let {id} = req.body;
            let searchedUser = await this.getUserUseCase.run(id);

            if (searchedUser){
                return res.status(200).send({
                    status: "success",
                    data:{
                        name: searchedUser.nombres,
                        apellido_paterno: searchedUser.apellido_paterno,
                        apellido_materno: searchedUser.apellido_materno
                    },
                    message:" Usuario encontrado"
                })
            }else{
                return res.status(400).send({
                    status: "Error",
                    data: [],
                    message: "Error al Encontrar Usuario"
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