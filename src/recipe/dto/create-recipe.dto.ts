import {
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';
import { Difficulty } from '../entities/recipe.entity';

export class CreateRecipeDto {
  id: Number;

  @IsString()
  @IsNotEmpty()
  title: String;

  @IsArray()
  ingredients: String[];

  @IsNumber()
  cookingTime: Number;

  @IsNumber()
  preparationTime: Number;

  @IsEnum(['EASY', 'MEDIUM', 'HARD'], { message: 'Assign a valid difficulty' })
  difficulty: Difficulty;
}
