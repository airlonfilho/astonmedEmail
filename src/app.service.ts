import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { EmailDto } from './dto/email-dto';
@Injectable()
export class AppService {
  constructor(
    private readonly mailerService: MailerService
  ) {} 

    async sendEmail(emailDto: EmailDto): Promise<any> {
      console.log(emailDto.nome)
      return await this.mailerService.sendMail({
        to: "astonmed@gmail.com",
        subject: "Email recebido do site",
        html: `Uma nova mensagem vinda do site <br> <strong>Nome:</strong> ${emailDto.nome}<br> <strong>Email:</strong> ${emailDto.email}<br> <strong>Telefone:</strong> ${emailDto.telefone}<br> <strong>Mensagem:</strong> ${emailDto.mensagem}`
      })
    }
}
