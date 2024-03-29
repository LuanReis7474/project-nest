import { Body, Controller, Post, Get, Param, Put, Patch, Delete, ParseIntPipe } from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-user.dto";
import { UpdatePutUserDTO } from "./dto/update-put-user.dto";
import { UpdatePatchUserDTO } from "./dto/update-patch-user.dto";
import { UserService } from "./user.service";

@Controller('users')
export class UserController {

    constructor(private readonly userService: UserService) {

    }

    @Post()
    async create(@Body() data: CreateUserDTO): Promise<any> {
        return this.userService.create(data);
    }

    @Get()
    async list(): Promise<any> {
        return this.userService.list();
    }

    @Get(':id')
    async listById(@Param('id', ParseIntPipe) id: number): Promise<any> {
        return this.userService.listById(id);
    }

    @Put(':id')
    async updateAll(@Body() data: UpdatePutUserDTO, @Param('id', ParseIntPipe) id: number) {
        return this.userService.updateAll(id, data);
    }

    @Patch(':id')
    async update(@Body() data: UpdatePatchUserDTO, @Param('id', ParseIntPipe) id: number) {
        return this.userService.update(id, data);
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number) {
        return this.userService.delete(id);
    }


}
