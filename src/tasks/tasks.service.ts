import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PrismaService } from '../prisma/prisma.service';
import { FetchTaskDto } from './dto/fetch-task.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.taskCreateInput): Promise<CreateTaskDto> {
    return this.prisma.task.create({
      data,
    });
  }

  async findAll(fetchTaskDto: FetchTaskDto) {
    const { priority, q, status } = fetchTaskDto;

    const priorityCriteria: Prisma.taskWhereInput = {};
    const statusCriteria: Prisma.taskWhereInput = {};
    const qCriteria: Prisma.taskWhereInput = {};

    if (priority) {
      priorityCriteria.priority = priority;
    }

    if (status) {
      statusCriteria.status = status;
    }

    if (q) {
      qCriteria.OR = [
        {
          title: {
            contains: q,
            mode: 'insensitive',
          },
        },
        {
          description: {
            contains: q,
            mode: 'insensitive',
          },
        },
      ];
    }

    const query: Prisma.taskWhereInput = {
      ...priorityCriteria,
      ...statusCriteria,
      ...qCriteria,
    };

    const total = await this.count(query);

    const data = await this.prisma.task.findMany({
      where: query,
      take: 10,
    });

    return {
      total,
      records: data.length,
      data,
    };
  }

  async findOne(id: string) {
    const data = await this.prisma.task.findUnique({
      where: { id },
    });
    return { data };
  }

  async update(
    id: string,
    data: Prisma.taskCreateInput,
  ): Promise<UpdateTaskDto> {
    return this.prisma.task.update({
      where: { id },
      data,
    });
  }

  async remove(id: string) {
    await this.prisma.task.delete({
      where: { id },
    });
    return { succes: true };
  }

  async count(where?: Prisma.taskWhereInput) {
    // Compter le nombre total de tâches selon les critères de filtre éventuels
    return this.prisma.task.count({ where });
  }
}
