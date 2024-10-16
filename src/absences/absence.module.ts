import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AbsenceService } from './services/absence.sevice';
import { AbsenceController } from './controllers/absences.controller';
import { Absence } from './entity/absence.entity';
import { Employee } from '../employees/entity/employee.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Absence, Employee])],
  controllers: [AbsenceController],
  providers: [AbsenceService],
})
export class AbsenceModule {}
