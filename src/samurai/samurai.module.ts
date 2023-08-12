import { Module } from '@nestjs/common';
import { SamuraiController } from './samurai.controller';
import { SamuraiService } from './samurai.service';

@Module({
  controllers: [SamuraiController],
  providers: [SamuraiService]
})
export class SamuraiModule {}
