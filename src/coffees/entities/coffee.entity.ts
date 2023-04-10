import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Flavor } from './flavor.entity';

@Entity() // SQL table Coffee
export class Coffee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column()
  brand: string;

  @Column({ default: 0 })
  recommendations: number;

  @JoinTable() // Join the 2 tables - only the owner-side does this
  @ManyToMany(
    () => Flavor,
    (flavor) => flavor.coffees, // What is Coffee within the Flavor entity
    {
      cascade: true,
    },
  )
  flavors: Array<Flavor>;
}
