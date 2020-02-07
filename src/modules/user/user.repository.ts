import { Repository, EntityRepository } from 'typeorm';
import { User } from './user.entity';

/**Proveer todos los metodos necesarios para interactuar con la base de datos */
@EntityRepository(User)
export class UserRepository extends Repository<User> {}
