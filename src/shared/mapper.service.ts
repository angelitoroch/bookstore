import { Injectable } from '@nestjs/common';
import { TypeMapper } from 'ts-mapper';
import { User } from 'src/modules/user/user.entity';
import { UserDTO } from 'src/modules/user/dto/user.dto';

@Injectable()
export class MapperService extends TypeMapper {
  constructor() {
    //**Llamamos el constructor de la clase padre el cual es typeMapper */
    super();
    this.config();
  }

  /**Metodo que configurara nuestros mappers */
  private config(): void {
    this.createMap<User, UserDTO>()
      .map(
        entity => entity.id,
        dto => dto.id,
      )
      .map(
        entity => entity.username,
        dto => dto.username,
      )
      .map(
        entity => entity.email,
        dto => dto.email,
      )
      .map(
        entity => entity.details,
        dto => dto.details,
      )
      .map(
        entity => entity.roles,
        dto => dto.roles,
      );
  }
}
