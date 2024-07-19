import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { BinModule } from './routing/bin/bin.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      expandVariables: true,
      envFilePath: ['.env.local', '.env'],
    }),
    DatabaseModule,
    BinModule,
  ],
})
export class AppModule {}
