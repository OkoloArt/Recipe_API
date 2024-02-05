import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Recipe } from 'src/recipe/entities/recipe.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: +configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        entities: [Recipe],
        ssl: {
          rejectUnauthorized: false, // Set to true in production for a secure connection
        },
        connection: {
          options: `project=${configService.get('ENDPOINT_ID')}`,
        },
        synchronize: true,
      }),
    }),
  ],
})
export class DatabaseModule {}
