import { IsNotEmpty } from 'class-validator';
import { RoleType } from 'src/modules/role/roletype.enum';
import { UserDetails } from '../user.details.entity';

/**Clase que se usara para transferir solo datos utiles de la clase User */
export class UserDTO {
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  roles: RoleType[];

  @IsNotEmpty()
  details:UserDetails
}
