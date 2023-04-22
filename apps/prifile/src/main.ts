import { NestFactory } from '@nestjs/core';
import { PrifileModule } from './prifile.module';

async function bootstrap() {
  const app = await NestFactory.create(PrifileModule);
  await app.listen(3000);
}
bootstrap();
