import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class BinEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  @Column()
  hash: string;
}
