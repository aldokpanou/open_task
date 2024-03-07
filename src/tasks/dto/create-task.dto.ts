import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEnum, IsUUID } from 'class-validator';
import { TaskStatus, TaskPriority } from '@prisma/client';

export class CreateTaskDto {
  @IsUUID()
  id: string;

  @ApiProperty()
  @IsString()
  title: string;

  @ApiProperty()
  @IsString()
  description: string;

  @ApiProperty({ enum: TaskStatus })
  @IsEnum(TaskStatus)
  status: TaskStatus;

  @ApiProperty({ enum: TaskPriority })
  @IsEnum(TaskPriority)
  priority: TaskPriority;
}
