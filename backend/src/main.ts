import { NestFactory } from '@nestjs/core'
import { GalleFin } from './galleFin'

async function bootstrap() {
  const app = await NestFactory.create(GalleFin)
  app.enableCors()

  await app.listen(3000)
}
bootstrap()
