import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `<h1  style="color:red; text-align:center;"  >This is the hello</h>
    <p>We are doing hello<p/>
    
    
    `;
  }
}
