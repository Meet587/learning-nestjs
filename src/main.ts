import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { NestExpressApplication } from "@nestjs/platform-express";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);
    const options = new DocumentBuilder()
        .setTitle("API from Nestjs")
        .setDescription("learning nest js")
        .setVersion("1.0")
        .addTag("Backend API");
    const document = SwaggerModule.createDocument(app, options.build());
    SwaggerModule.setup("api-docs", app, document);
    app.enableCors();
    await app.listen(3000);
}
bootstrap();
