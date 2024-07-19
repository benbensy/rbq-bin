import { Injectable } from '@nestjs/common';
import { randomBytes } from 'crypto';
import { BinEntity } from 'src/database/entities/bin.entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class BinService {
  private binRepository: Repository<BinEntity>;

  constructor(private readonly dataSource: DataSource) {
    this.binRepository = this.dataSource.getRepository(BinEntity);
  }

  async getOneBinByHash(hash: string) {
    return this.binRepository.findOne({
      where: {
        hash,
      },
      select: ['hash', 'content'],
    });
  }

  async createBin(content: string) {
    const createResult = await this.binRepository.save({
      content,
      hash: randomBytes(6).toString('hex'),
    });
    return createResult?.hash;
  }
}
