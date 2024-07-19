import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { DataUtilService } from '../../utils/data-util.service';
import { BinService } from './bin.service';
import { CreateBinDto } from 'src/database/entities/create-bin.dto';

@Controller('/api/bin')
export class BinController {
  constructor(
    private readonly dataUtilService: DataUtilService,
    private readonly binService: BinService,
  ) {}

  @Post()
  async uploadBin(@Body() createBinDto: CreateBinDto) {
    const hash = await this.binService.createBin(createBinDto.content);
    return this.dataUtilService.response({
      hash,
      url: `/preview/${hash}`,
    });
  }

  @Get(':hash')
  async getBin(@Param('hash') hash: string) {
    const binResult = await this.binService.getOneBinByHash(hash);
    return this.dataUtilService.response({
      content: binResult.content,
      hash,
    });
  }
}
