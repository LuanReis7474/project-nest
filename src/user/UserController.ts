import { Body, Controller, Post, Get, Param, Put, Patch, Delete } from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-user.dto";



@Controller('users')
export class UserController {

    @Post()
    async create(@Body() body: CreateUserDTO): Promise<any> {
        return { body };
    }

    @Get()
    async list(): Promise<any> {
        return { users: [] };
    }

    @Get(':id')
    async listById(@Param() params): Promise<any> {
        return { users: {}, params };
    }

    @Put(':id')
    async updateAll(@Body() body, @Param() params) {
        return {
            method: 'put',
            body: `${body}`,
            params: `${params}`
        }
    }

    @Patch(':id')
    async update(@Body() body, @Param() params) {
        return {
            method: 'patch',
            body: `${body}`,
            params: `${params}`
        }
    }

    @Delete(':id')
    async delete(@Param() params) {
        return {
            params
        }
    }

}
