import * as dotenv from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';
import { runSeeders, SeederOptions } from 'typeorm-extension';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

dotenv.config();

export const dataSourceOptions: DataSourceOptions & SeederOptions = {
  type: 'postgres',
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: +process.env.DB_PORT,
  host: process.env.DB_HOST,
  entities: [
    'dist/**/*.entity{.ts,.js}',
    'dist/**/**/entities/*.entity{.ts,.js}',
    'dist/**/**/**/entities/*.entity{.ts,.js}',
  ],
  migrations: ['dist/database/migrations/*{.ts,.js}'],
  seedTracking: false,
  synchronize: process.env.DB_SYNCHRONIZE === 'true',
  cache: true,
  namingStrategy: new SnakeNamingStrategy(), // Use snake_case naming strategy for database fields
};

// Initialize the data source
export const AppDataSource = new DataSource(dataSourceOptions);

// Run the seeders (if necessary)
AppDataSource.initialize()
  .then(async () => {
    console.log('Data source has been initialized!');
    await runSeeders(AppDataSource); // This runs the seeders
  })
  .catch((error) => {
    console.error('Error during data source initialization', error);
  });
