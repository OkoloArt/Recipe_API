import { Module } from '@nestjs/common';
import { RecipeModule } from './recipe/recipe.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [RecipeModule, DatabaseModule],
})
export class AppModule {}
