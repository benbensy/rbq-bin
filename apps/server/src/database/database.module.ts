import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BinEntity } from './entities/bin.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'better-sqlite3',
        database: configService.get('DATABASE'),
        synchronize: configService.get('NODE_ENV') !== 'production',
        entities: [BinEntity],
      }),
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
