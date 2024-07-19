import { Module } from '@nestjs/common';
import { BinService } from './bin.service';
import { BinController } from './bin.controller';
import { DataUtilService } from 'src/utils/data-util.service';

@Module({
  controllers: [BinController],
  providers: [BinService, DataUtilService],
})
export class BinModule {}
