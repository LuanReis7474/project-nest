import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  SetHello(): string {
    return 'OI'
  }

  @Get('/teste')
  getH(): string {
    return this.appService.getSentence();
  }
}
