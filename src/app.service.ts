import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Hell!';
  }
  getServerSide(): string {
    return 'Hello From the server side!';
  }
}
