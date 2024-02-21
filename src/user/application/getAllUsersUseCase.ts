import { User } from "../domain/entities/user";
import { UserRepository } from "../domain/repository/userRepository";

export class GetAllUsersUseCase {
  constructor(readonly userRepository: UserRepository) {}

  async run(): Promise<User[] | null> {
    try {
      const users = await this.userRepository.getUsers();
      return users;
    } catch (error) {
      console.error("Error en GetUsersUseCase", error);
      return [];
    }
  }
}