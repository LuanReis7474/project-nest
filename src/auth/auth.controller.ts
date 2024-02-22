import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { AuthLoginDTO } from './dto/auth-login.dto';
import { AuthService } from './auth.service';
import { AuthMeDTO } from './dto/auth-me.dto';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {

    }

    @Post('login')
    async login(@Body() { email, password }: AuthLoginDTO, @Res() res) {
        try {
            const objUser = await this.authService.login(email, password);
            return res.status(HttpStatus.OK).json({ objUser });
        } catch (error) {
            return res.status(HttpStatus.UNAUTHORIZED).json({ message: error.message });
        }
    }

    @Post('me')
    async verify(@Body() { token }: AuthMeDTO) {
        return this.authService.checkToken(token);
    }
}
