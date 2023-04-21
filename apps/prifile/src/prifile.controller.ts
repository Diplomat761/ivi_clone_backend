import { Controller, Get } from '@nestjs/common';
import { PrifileService } from './prifile.service';

@Controller()
export class PrifileController {
  constructor(private readonly prifileService: PrifileService) {}

  @Get()
  getHello(): string {
    return this.prifileService.getHello();
  }
}
