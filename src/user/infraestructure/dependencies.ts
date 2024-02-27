import { SqlizeUserRepository } from "./sqlizeUsersRepository";
import { AddUserUseCase } from "../application/addUsersUseCase";
import { AddUserController } from "./controllers/addUserController";
import { GetUserUseCase } from "../application/getUserUseCase";
import { GetUserController } from "./controllers/getUserController";
import { GetAllUsersUseCase } from "../application/getAllUsersUseCase";
import { GetAllUserController } from "./controllers/getAllUsersController";
import { BcryptHelper } from "./helpers/bcryptHelper";
import { WebTokensService } from "./helpers/WebToken";

export const sqlizeUserRepository= new SqlizeUserRepository();

export const bcryptHelper = new BcryptHelper();
const webTokens = new WebTokensService();

export const addUserUseCase = new AddUserUseCase(sqlizeUserRepository, bcryptHelper, webTokens);
export const addUserController = new AddUserController(addUserUseCase);

export const getUserUseCase = new GetUserUseCase(sqlizeUserRepository, bcryptHelper);
export const getUserController = new GetUserController(getUserUseCase);

export const getAllUsersUseCase = new GetAllUsersUseCase(sqlizeUserRepository);
export const getAllUserController = new GetAllUserController(getAllUsersUseCase);

