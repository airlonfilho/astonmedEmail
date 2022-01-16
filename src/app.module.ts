import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MailerModule } from '@nestjs-modules/mailer';
@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        service: "gmail",
        host: "smtp.gmail.com",
        port: 465,
        secure: false,
        auth: {
          user: "astonmedsendmail@gmail.com",
          pass: "bIDkwp5g"
        },
      }
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
