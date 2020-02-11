import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { UserRepository } from './user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { MapperService } from 'src/shared/mapper.service';
import { async } from 'rxjs/internal/scheduler/async';
import { UserDTO } from './dto/user.dto';
import { User } from './user.entity';

/**Servicio que contendra todos los metodos para realizar el crud en los usuarios */
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository)
    private readonly _userRepository: UserRepository,
    private readonly _mapperService: MapperService,
  ) {}

  /**Obtener un usuario */
  async get(id: number): Promise<UserDTO> {
    if (!id) {
      throw new BadRequestException('id must be sent');
    }

    /**Verificamos si el usuario tiene estatus ACTIVE */
    const user: User = await this._userRepository.findOne(id, {
      where: { status: 'ACTIVE' },
    });

    if (!user) {
      throw new NotFoundException();
    }

    /**Mapeamos el objeto User a un objeto UserDTO */
    return this._mapperService.map<User, UserDTO>(user, new UserDTO());
  }

  /**Obtener todos los usuarios */
  async getAll(): Promise<UserDTO[]> {
    /**Verificamos si los usuarios tiene estatus ACTIVE */
    const users: User[] = await this._userRepository.find({
      where: { status: 'ACTIVE' },
    });

    /**Mapeamos el arreglo de objetos users a un objeto UserDTO */
    return this._mapperService.mapCollection(users, new UserDTO());
  }

  /**Guardar un usuario */
  async create(user: User) {
    const saveUser = await this._userRepository.save(user);
    return this._mapperService.map<User, UserDTO>(user, new UserDTO());
  }

  /**Actualizar un usuario */
  async update(id: number, user: User): Promise<void> {
    await this._userRepository.update(id, user);
  }

  /**Eliminar un usuario */
  async delete(id: number): Promise<void> {
    const userExists = await this._userRepository.findOne(id, {
      where: { status: 'ACTIVE' },
    });

    if (!userExists) {
      throw new NotFoundException();
    }

    /**No se elimina solamente se poen en inactivo */
    await this._userRepository.update(id, { status: 'INACTIVE' });
  }
} 
