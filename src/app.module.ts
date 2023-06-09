import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CoffeesModule } from './coffees/coffees.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    CoffeesModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'pass123',
      database: 'postgres',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
