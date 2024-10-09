import { Module } from '@nestjs/common'; // Import the Module decorator
import { UsersController } from './auth/controllers/user.controller';
import { UsersService } from './auth/services/users.service';
import { User } from './auth/entity/user.entity';
import { EmployeesService } from './employees/services/employees.service';
import { UsersModule } from './auth/users.module'; // Ensure this path is correct
import { Employee } from './employees/entity/employee.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Employee]), // Include any necessary modules here
    UsersModule,
  ],
  controllers: [UsersController],
  providers: [UsersService, EmployeesService],
  exports: [UsersService],
})
export class AppModule {}
