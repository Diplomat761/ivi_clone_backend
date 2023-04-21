import { Module } from '@nestjs/common';
import { PrifileController } from './prifile.controller';
import { PrifileService } from './prifile.service';

@Module({
  imports: [],
  controllers: [PrifileController],
  providers: [PrifileService],
})
export class PrifileModule {}
