/* eslint-disable @typescript-eslint/no-unused-vars */
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Coffee } from './coffees.entities';

@Entity()
export class Flavor {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @ManyToMany((type) => Coffee, (coffee) => coffee.flavors)
  coffee: Coffee[];
}
