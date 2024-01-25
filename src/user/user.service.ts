import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-user.dto";
import { PrismaService } from "src/prisma/prisma.service";
import { UpdatePutUserDTO } from "./dto/update-put-user.dto";
import { UpdatePatchUserDTO } from "./dto/update-patch-user.dto";

@Injectable()
export class UserService {

    constructor(private prisma: PrismaService) {
    }

    async create({ name, email, password, birthAt }: CreateUserDTO) {

        let birthAtDate = new Date(birthAt);

        return this.prisma.user.create({
            data: {
                name: name,
                email: email,
                password: password,
                birthAt: birthAt ? birthAtDate : null
            }
        });
    }

    async list() {
        return this.prisma.user.findMany();
    }

    async listById(id: number) {
        return this.prisma.user.findUnique({
            where: {
                id_user: id,
            }
        });
    }

    async updateAll(id: number, { email, name, password, birthAt }: UpdatePutUserDTO) {

        let birthAtDate = new Date(birthAt);

        return this.prisma.user.update({
            data: {
                email: email,
                name: name,
                password: password,
                birthAt: birthAt ? birthAtDate : null
            },
            where: { id_user: id }
        })
    }

    async update(id: number, { email, name, password, birthAt }: UpdatePatchUserDTO) {

        let birthAtDate = new Date(birthAt);

        return this.prisma.user.update({
            data: {
                email: email,
                name: name,
                password: password,
                birthAt: birthAt ? birthAtDate : null
            },
            where: { id_user: id }
        })
    }

    async delete(id: number) {
        if (!(await this.listById(id))) {
            throw new NotFoundException("Esse usuário não existe!");
        }

        return this.prisma.user.delete({
            where: { id_user: id }
        })
    }
}
