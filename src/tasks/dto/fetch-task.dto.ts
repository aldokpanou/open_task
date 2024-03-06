import { ApiProperty } from '@nestjs/swagger';
import { IsIn, IsOptional, IsString } from 'class-validator';
import { TaskStatus, TaskPriority } from '@prisma/client';

export class FetchTaskDto {
  @ApiProperty({
    description: 'Recherche de tâches par titre ou description',
    example: 'Votre recherche',
    required: false
  })
  @IsOptional()
  @IsString()
  q?: string;

  @ApiProperty({
    description: 'Statut de la tâche',
    enum: TaskStatus,
    isArray: false,
    example: [TaskStatus.IN_PROGRESS],
    required: false
  })
  @IsOptional()
  @IsIn(Object.values(TaskStatus), { each: true })
  status?: TaskStatus[];

  @ApiProperty({
    description: 'Priorité de la tâche',
    enum: TaskPriority,
    isArray: false,
    example: TaskPriority.HIGH,
    required: false
  })
  @IsOptional()
  @IsIn(Object.values(TaskPriority))
  priority?: TaskPriority;
}

