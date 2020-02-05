import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // acceder a un endpoint /api/endpointName
  app.setGlobalPrefix('api');
  await app.listen(AppModule.port);
}
bootstrap();
