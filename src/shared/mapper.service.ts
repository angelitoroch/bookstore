import { Injectable } from '@nestjs/common';
import { TypeMapper } from 'ts-mapper';
import { User } from 'src/modules/user/user.entity';

@Injectable()
export class MapperService extends TypeMapper {
  constructor() {
    //**Llamamos el constructor de la clase padre el cual es typeMapper */
    super();
    this.config();
  }

  /**Metodo que configurara nuestros mappers */
  private config(): void {
      this.createMap(User)
  }
}
