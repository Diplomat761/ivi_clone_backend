import { Injectable } from '@nestjs/common';

@Injectable()
export class PrifileService {
  getHello(): string {
    return 'Hello World!';
  }
}
