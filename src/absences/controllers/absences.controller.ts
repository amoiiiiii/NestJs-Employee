import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { AbsenceService } from '../services/absence.sevice';
import { CreateAbsenceDto } from '../dtos/create-absence.dto';
import { UpdateAbsenceDto } from '../dtos/update-absence.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('Absences') // Menandai semua endpoint dalam controller ini berada di bawah tag 'Absences'
@Controller('absences')
export class AbsenceController {
  constructor(private readonly absenceService: AbsenceService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new absence' })
  @ApiResponse({ status: 201, description: 'Absence has been created.' })
  @ApiResponse({ status: 404, description: 'Employee not found.' })
  create(@Body() createAbsenceDto: CreateAbsenceDto) {
    return this.absenceService.create(createAbsenceDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all absences' })
  @ApiResponse({ status: 200, description: 'Return all absences.' })
  findAll() {
    return this.absenceService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get absence by ID' })
  @ApiResponse({ status: 200, description: 'Return absence by ID.' })
  @ApiResponse({ status: 404, description: 'Absence not found.' })
  findOne(@Param('id') id: string) {
    return this.absenceService.findOne(+id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update absence by ID' })
  @ApiResponse({ status: 200, description: 'Absence has been updated.' })
  @ApiResponse({ status: 404, description: 'Absence or Employee not found.' })
  update(@Param('id') id: string, @Body() updateAbsenceDto: UpdateAbsenceDto) {
    return this.absenceService.update(+id, updateAbsenceDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete absence by ID' })
  @ApiResponse({ status: 200, description: 'Absence has been deleted.' })
  @ApiResponse({ status: 404, description: 'Absence not found.' })
  remove(@Param('id') id: string) {
    return this.absenceService.remove(+id);
  }
}
