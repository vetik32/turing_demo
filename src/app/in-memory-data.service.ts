import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Message } from './tweets/channel/channel.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const messages: Message[] = [
      {
        content: '123',
        username: 'user1',
        created_at: new Date(),
        url: 'http://url1'
      },
      {
        content: '234',
        username: 'user2',
        created_at: new Date(),
        url: 'http://url2'
      }
    ];

    return {messages};
  }
}
