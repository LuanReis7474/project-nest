import { Body, Controller, Post, Get, Param, Put, Patch, Delete, ParseIntPipe } from "@nestjs/common";
import { EventsService } from './events.service';
import { CreateEventsDTO } from "./dto/events.dto/create-events.dto";
import { UpdatePutEventsDTO } from "./dto/events.dto/update-put-events.dto";
import { UpdatePatchEventsDTO } from "./dto/events.dto/update-patch-events.dto";

@Controller('events')
export class EventsController {
    constructor(private readonly eventService: EventsService) {

    }

    @Post()
    async create(@Body() data: CreateEventsDTO): Promise<any> {
        return this.eventService.create(data);
    }

    @Get()
    async list(): Promise<any> {
        return this.eventService.list();
    }

    @Get(':id')
    async listById(@Param('id', ParseIntPipe) id: number): Promise<any> {
        return this.eventService.listById(id);
    }

    @Get('user/:userId')
    async listEventsByUser(@Param('userId', ParseIntPipe) userId: number): Promise<any> {
        return this.eventService.listByUserId(userId);
    }

    @Put(':id')
    async updateAll(@Body() data: UpdatePutEventsDTO, @Param('id', ParseIntPipe) id: number) {
        return this.eventService.updateAll(id, data);
    }

    @Patch(':id')
    async update(@Body() data: UpdatePatchEventsDTO, @Param('id', ParseIntPipe) id: number) {
        return this.eventService.update(id, data);
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number) {
        return this.eventService.delete(id);
    }
}
