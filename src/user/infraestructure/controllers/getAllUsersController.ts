import { Request, Response } from "express";
import { GetAllUsersUseCase } from "../../application/getAllUsersUseCase";

export class GetAllUserController {
  constructor(readonly getUsersUseCase: GetAllUsersUseCase) {}

  async run(req: Request, res: Response) {
    try {
      const users = await this.getUsersUseCase.run();

      if (users)
        return res.status(200).send({
          status: "success",
          data: users.map((user) => ({
            name: user.nombres,
            apellido_paterno: user.apellido_paterno,
            apellido_materno: user.apellido_materno
          })),
          message: "Usuarios obtenidos",
        });
      else
        res.status(400).send({
          status: "error",
          messages: "Ocurrio un error aqui",
        });
    } catch (error) {
      console.error("Error en el controlador", error);
      res.status(500).send({
        status: "error",
        message: "Error en el servidor",
      });
    }
  }
}
