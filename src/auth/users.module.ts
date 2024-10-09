// src/users/users.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './controllers/user.controller'; // Update this path as necessary
import { UsersService } from './services/users.service';
import { User } from './entity/user.entity';
import { EmployeesModule } from '../employees/employees.module'; // Adjust the path to EmployeesModule

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    EmployeesModule, // Import EmployeesModule here
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
