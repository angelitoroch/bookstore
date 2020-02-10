import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinColumn,
} from 'typeorm';
import { User } from '../user/user.entity';

@Entity('roles')
export class Role extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 20, nullable: false })
  name: String;

  @Column({ type: 'text', nullable: false })
  description: string;

  @Column({ type: 'varchar', default: 'ACTIVE', length: 8 })
  status: string;

  @Column({ type: 'timestamp', name: 'created_at' })
  createAT: Date;

  @Column({ type: 'timestamp', name: 'update_at' })
  updateAT: Date;

  /**Tabla intermedia para la relacion de roles con user.entity */
  @ManyToMany(
    type => User,
    user => user.roles,
  )
  @JoinColumn({ name: 'user_roles' })
  users: User[];
}
