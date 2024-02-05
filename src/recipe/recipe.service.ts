import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Recipe } from './entities/recipe.entity';

@Injectable()
export class RecipeService {
  constructor(
    @InjectRepository(Recipe)
    private readonly recipeRepo: Repository<Recipe>,
  ) {}

  async create(createRecipeDto: CreateRecipeDto): Promise<Recipe> {
    const recipe = this.recipeRepo.create(createRecipeDto);
    return await this.recipeRepo.save(recipe);
  }

  async findAll(): Promise<Recipe[]> {
    return await this.recipeRepo.find();
  }

  async findOne(id: number): Promise<Recipe> {
    const recipe = await this.recipeRepo.findOne({ where: { id } });
    if (!recipe) throw new NotFoundException("Recipe doesn't exist");
    return recipe;
  }

  async update(id: number, updateRecipeDto: UpdateRecipeDto): Promise<Recipe> {
    const recipe = await this.findOne(id);
    Object.assign(recipe, updateRecipeDto);
    return this.recipeRepo.save(recipe);
  }

  async remove(id: number): Promise<void> {
    await this.recipeRepo.delete(id);
  }
}
