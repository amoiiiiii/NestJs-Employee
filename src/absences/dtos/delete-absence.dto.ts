import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class DeleteAbsenceDto {
  @ApiProperty({
    description: 'The ID of the absence to delete',
  })
  @IsString()
  id: string;
}
