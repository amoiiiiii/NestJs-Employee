import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './auth/users.module';
import { EmployeesModule } from './employees/employees.module';
import { dataSourceOptions } from './config/database.config';
// eslint-disable-next-line @typescript-eslint/no-unused-vars

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(dataSourceOptions),
    UsersModule,
    EmployeesModule,
  ],
})
export class AppModule {}
