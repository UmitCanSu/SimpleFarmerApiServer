import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Acaba No SQl Ogrenebilecek miyiz? ';
  }
}
