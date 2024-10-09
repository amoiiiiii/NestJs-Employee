// src/app.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppDataSource } from './data-source'; // Import your data source
import { UsersModule } from './auth/users.module'; // Ensure this path is correct

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(AppDataSource.options), // Use the datasource options here
    UsersModule, // Import your UsersModule
  ],
})
export class AppModule {}
