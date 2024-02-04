import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Recipe {
  @PrimaryGeneratedColumn()
  id: Number;

  @Column()
  title: String;

  @Column('jsonb')
  ingredients: String[];

  @Column()
  cookingTime: Number;

  @Column()
  preparationTime: Number;

  @Column()
  difficulty: Difficulty;
}

export enum Difficulty {
  EASY = 'Easy',
  MEDIUM = 'Medium',
  HARD = 'Hard',
}
