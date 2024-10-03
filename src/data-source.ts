// src/data-source.ts
import { DataSource } from 'typeorm';
import { User } from './auth/entity/user.entity'; // Adjust the import path as needed

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT, // Convert to number
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [User],
  synchronize: false, // Set to false for manual migrations
  migrations: ['dist/migrations/*.js'],
});
