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
    summary: `Get transactions history`,
    description: `Get transactions history  \n **{accountId}** is the id of the merchant business account.  \n It's the **id** inside **developerAccounts** of **/v1.0/auth/me** response.`,
  })
  @Post()
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.create(createTaskDto);
  }

  @Get()
  findAll(@Query() fetchtaskDto: FetchTaskDto) {
    return this.tasksService.findAll(fetchtaskDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tasksService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.tasksService.update(id, updateTaskDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tasksService.remove(id);
  }
}
