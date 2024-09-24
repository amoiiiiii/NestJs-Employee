import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeesModule } from '../src/employees/employees.module';
import { Employee } from '../src/employees/employee.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '082411',
      database: 'employee_db',
      entities: [Employee],
      synchronize: true,
    }),
    EmployeesModule,
  ],
})
export class AppModule {}
