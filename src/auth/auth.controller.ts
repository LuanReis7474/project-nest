import { Body, Controller, Post } from '@nestjs/common';
import { AuthLoginDTO } from './dto/auth-login.dto';
import { AuthService } from './auth.service';
import { AuthMeDTO } from './dto/auth-me.dto';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {

    }

    @Post('login')
    async login(@Body() { email, password }: AuthLoginDTO) {
        return this.authService.login(email, password);
    }

    @Post('me')
    async verify(@Body() { token }: AuthMeDTO) {
        return this.authService.checkToken(token);
    }
}
