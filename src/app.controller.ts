import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { EmailDto } from './dto/email-dto';

@Controller('/send')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async sendEmail(@Body() emailDto: EmailDto): Promise<any> {
    console.log(emailDto);
    return this.appService.sendEmail(emailDto)
  }

}
