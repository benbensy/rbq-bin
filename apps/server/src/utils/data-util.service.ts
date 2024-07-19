import { Injectable } from '@nestjs/common';

@Injectable()
export class DataUtilService {
  response<T extends Record<string, any> = object>(data: T, code?: string) {
    return {
      code,
      data,
    };
  }
}
