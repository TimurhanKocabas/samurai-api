import { Test, TestingModule } from '@nestjs/testing';
import { SamuraiController } from './samurai.controller';

describe('SamuraiController', () => {
  let controller: SamuraiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SamuraiController],
    }).compile();

    controller = module.get<SamuraiController>(SamuraiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
