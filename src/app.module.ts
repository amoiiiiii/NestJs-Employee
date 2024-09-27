import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { EmployeesModule } from './employees/employees.module';
import { dataSourceOptions } from './config/database.config'; // Import from the config

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(dataSourceOptions), // Use dataSourceOptions directly
    EmployeesModule,
  ],
})
export class AppModule {}
