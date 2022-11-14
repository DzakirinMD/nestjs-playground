import { Module } from '@nestjs/common';
import { AppController } from '../controllers/app.controller';
import { CatsController } from 'src/controllers/cats.controller';
import { AppService } from '../services/app.service';

@Module({
  imports: [],
  controllers: [AppController, CatsController],
  providers: [AppService],
})
export class AppModule {}
