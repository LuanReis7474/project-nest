import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateEventsDTO } from './dto/events.dto/create-events.dto';
import { UpdatePutEventsDTO } from './dto/events.dto/update-put-events.dto';
import { UpdatePatchEventsDTO } from './dto/events.dto/update-patch-events.dto';

@Injectable()
export class EventsService {
    constructor(private prisma: PrismaService) {

    }

    async create({ startTime, endTime, describe, idUser }: CreateEventsDTO) {
        if ((await this.verifyEvent(startTime, endTime)).length <= 0) {
            try {
                return await this.prisma.event.create({
                    data: {
                        start_time: startTime,
                        end_time: endTime,
                        describe_event: describe,
                        id_user: idUser
                    }
                });
            } catch (error) {
                console.error(error);
                throw error;
            }
        }
        else {
            return "Já existe evento nesse horário";
        }

    }

    async list() {
        return this.prisma.event.findMany();
    }

    async listById(id: number) {
        return this.prisma.event.findUnique({
            where: {
                id_event: id,
            }
        });
    }

    async listByUserId(id: number) {
        return this.prisma.event.findMany({
            where: {
                id_user: id,
            }
        });
    }

    async updateAll(id: number, { startTime, endTime, describe, idUser }: UpdatePutEventsDTO) {

        return this.prisma.event.update({
            data: {
                start_time: startTime,
                end_time: endTime,
                describe_event: describe,
                id_user: idUser
            },
            where: { id_event: id }
        })
    }

    async update(id: number, { startTime, endTime, describe, idUser }: UpdatePatchEventsDTO) {

        return this.prisma.event.update({
            data: {
                start_time: startTime ? startTime : null,
                end_time: endTime ? endTime : null,
                describe_event: describe,
                id_user: idUser
            },
            where: { id_event: id }
        })
    }

    async delete(id: number) {
        if (!(await this.listById(id))) {
            throw new NotFoundException("Esse evento não existe!");
        }

        return this.prisma.event.delete({
            where: { id_event: id }
        })
    }

    async verifyEvent(startTime: string, endTime: string) {
        return this.prisma.event.findMany({
            where: {
                start_time: {
                    equals: startTime,
                },
                end_time: {
                    equals: endTime,
                },
            },
        });

    }
}
