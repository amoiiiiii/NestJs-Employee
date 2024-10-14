import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Konfigurasi Swagger
  const config = new DocumentBuilder()
    .setTitle('Employee Management API')
    .setDescription('API for managing employees, including attendance records.')
    .setVersion('1.0')
    .addBearerAuth() // Menambahkan Bearer Auth (untuk token JWT)
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document); // Dokumentasi dapat diakses di /api-docs

  await app.listen(3000);
}
bootstrap();
