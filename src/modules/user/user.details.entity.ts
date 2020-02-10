import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('User_details')
export class UserDetails extends BaseEntity {
  /**Columna primaria que se genera a traves de un autoincrementable */
  @PrimaryGeneratedColumn('increment')
  id: number;

  /**Columna que sera del tipo varchar, sera unico, con longitud maxima de 25 y no puede ser falsa */
  @Column({ type: 'varchar', length: 50, nullable: false })
  name: string;

  @Column({ type: 'varchar', nullable: true })
  lastname: string;

  @Column({ type: 'varchar', default: 'ACTIVE', length: 8 })
  status: string;

  @Column({ type: 'timestamp', name: 'created_at' })
  createAT: Date;

  @Column({ type: 'timestamp', name: 'update_at' })
  updateAT: Date;
}
