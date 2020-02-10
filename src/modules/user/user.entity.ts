import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('users')
export class User extends BaseEntity {
    
  /**Columna primaria que se genera a traves de un autoincrementable */
  @PrimaryGeneratedColumn('increment')
  id: number;

  /**Columna que sera del tipo varchar, sera unico, con longitud maxima de 25 y no puede ser falsa */
  @Column({ type: 'varchar', unique: true, length: 25, nullable: false })
  username: string;

  @Column({ type: 'varchar', nullable: false })
  email: string;

  @Column({ type: 'varchar', nullable: false })
  password: string;

  @Column({ type: 'varchar', default: 'ACTIVE', length: 8 })
  status: string;

  @Column({ type: 'timestamp', name: 'created_at' })
  createAT: Date;

  @Column({ type: 'timestamp', name: 'update_at' })
  updateAT: Date;
}
