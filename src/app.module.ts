import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppDataSource } from './data-source'; // Import your data source
import { UsersModule } from './auth/users.module'; // Ensure this path is correct
import { AttendanceModule } from './attendance/attendance.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(AppDataSource.options), // Use the datasource options here
    UsersModule,
    AttendanceModule, // No need to replace, this is the correct format
  ],
})
export class AppModule {}
