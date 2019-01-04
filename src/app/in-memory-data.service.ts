import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

import { twits } from './twitter-user_timeline';

export const channels = {
  'makeschool': {
    name: 'Make School',
    avatar: '/assets/avatars/mike_school.jpg'
  },
  'newsycombinator': {
    name: 'Hacker News',
    avatar: '/assets/avatars/newsycombinator.png'
  },
  'ycombinator': {
    name: 'Y Combinator',
    avatar: '/assets/avatars/ycombinator.jpg'
  }
};


@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {

    const db = {};

    Object.keys(channels).forEach((endPoint: string) => {
      db[endPoint] = twits.map((twit) => {
        return {
          ...twit,
          user: {
            ...twit.user,
            name: channels[endPoint].name,
            screen_name: channels[endPoint].name.replace(' ', ''),
            profile_image_url: channels[endPoint].avatar
          }
        };
      });

    });

    return db;
  }
}
