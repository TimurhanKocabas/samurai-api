import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SamuraiModule } from './samurai/samurai.module';

@Module({
  imports: [SamuraiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
