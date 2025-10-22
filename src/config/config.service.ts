import { Injectable } from '@nestjs/common';
import { ConfigService as NestConfigService } from '@nestjs/config';

@Injectable()
export class ConfigService {
  constructor(private readonly configService: NestConfigService) {}

  get(key: string): string {
    const value = this.configService.get<string>(key);
    if (value === undefined) {
      throw new Error(`Config error: Missing env variable "${key}"`);
    }
    return value;
  }
}
