import { Controller, Get, Param, Post, Body, Patch, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { UserDTO } from './dto/user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly _userService: UserService) {}

  /**Controlador para buscar un usuario en especifico */
  @Get()
  async getUser(@Param() id: number): Promise<UserDTO> {
    const user = await this._userService.get(id);
    return user;
  }

  /**Controlador para buscar todos los usuarios */
  @Get()
  async getUsers(): Promise<UserDTO[]> {
    const users = await this._userService.getAll();
    return users;
  }

  /**Controlador para crear un usuario */
  @Post()
  async createUser(@Body() user: User): Promise<UserDTO> {
    const createUser = await this._userService.create(user);
    return createUser;
  }

  /*Controlador para actualizar un usuario */
  @Patch()
  async updateUser(@Param() id: number, @Body() user: User): Promise<UserDTO> {
    const createUser = await this._userService.create(user);
    return createUser;
  }

  /**Controlador para eliminar un usuario */
  @Delete()
  async deleteUser(@Param() id:number){
    await this._userService.delete(id);
    return true;
  }
}
