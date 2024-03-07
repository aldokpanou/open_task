import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { FetchTaskDto } from './dto/fetch-task.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Tâches')
@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @ApiOperation({
    summary: 'Créer une tâche',
    description: 'Créer une nouvelle tâche avec les détails fournis.',
  })
  @Post()
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.create(createTaskDto);
  }

  @ApiOperation({
    summary: 'Obtenir toutes les tâches',
    description: 'Obtenir la liste de toutes les tâches en fonction des filtres fournis.',
  })
  @Get()
  findAll(@Query() fetchtaskDto: FetchTaskDto) {
    return this.tasksService.findAll(fetchtaskDto);
  }

  @ApiOperation({
    summary: 'Obtenir une tâche par ID',
    description: 'Obtenir les détails d\'une tâche en spécifiant son identifiant.',
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tasksService.findOne(id);
  }

  @ApiOperation({
    summary: 'Modifier une tâche',
    description: 'Modifier les détails d\'une tâche en spécifiant son identifiant et les nouvelles données.',
  })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.tasksService.update(id, updateTaskDto);
  }

  @ApiOperation({
    summary: 'Supprimer une tâche',
    description: 'Supprimer une tâche en spécifiant son identifiant.',
  })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tasksService.remove(id);
  }
}
