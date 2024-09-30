// users/users.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from '../auth/controllers/user.controller';
import { UsersService } from './services/users.service';
import { User } from './entity/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])], // Register User entity with TypeORM
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService], // Export UsersService if used in other modules
})
export class UsersModule {}
