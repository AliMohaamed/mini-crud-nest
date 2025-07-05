import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule, } from '@nestjs/swagger';
import { writeFileSync } from 'fs';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // validation
  app.useGlobalPipes(new ValidationPipe());

  // Swagger
  const config = new DocumentBuilder()
  .setTitle('Tech Xpress API')
  .setDescription('The Tech Xpress API description')
  .setVersion('1.0')
  .build();

  const document = SwaggerModule.createDocument(app, config);
  // Write Swagger JSON to file
  writeFileSync('./swagger.json', JSON.stringify(document));
  // Serve Swagger UI (Yummy) /swagger
  SwaggerModule.setup('swagger', app, document);



  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();
