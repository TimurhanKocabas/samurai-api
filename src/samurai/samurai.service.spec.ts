import { Test, TestingModule } from '@nestjs/testing';
import { SamuraiService } from './samurai.service';

describe('SamuraiService', () => {
  let service: SamuraiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SamuraiService],
    }).compile();

    service = module.get<SamuraiService>(SamuraiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
