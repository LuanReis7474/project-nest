import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { user } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {

    constructor(private readonly prisma: PrismaService,
        private jwtService: JwtService) {

    }

    async login(email: string, password: string) {
        const user = await this.prisma.user.findFirst({
            where: {
                email, password
            }
        })

        if (!user) {
            throw new UnauthorizedException('Usuário e/ou senha incorretos');
        }

        let token = await this.createToken(user);

        if (token) {
            let objUser = { token: token, user: user }
            return objUser;
        }

    }

    async createToken(user: user) {
        return this.jwtService.sign({
            sub: user.id_user,
            name: user.name,
            email: user.email
        }, {
            expiresIn: "24h"
        })

    }

    async checkToken(token: string) {
        try {
            const data = this.jwtService.verify(token);
            return data;
        }
        catch (e) {
            throw new BadRequestException(e);
        }

    }
}
