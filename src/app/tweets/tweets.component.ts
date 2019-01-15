import { Component } from '@angular/core';

import { Channel, channels } from '../channels';
import { LocalStorageService } from '../storage/local-storage.service';

@Component({
  selector: 'dmo-content',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.scss']
})
export class TweetsComponent {
  channels: Channel[] = [];
  order: [] = [];

  constructor(private storage: LocalStorageService) {
    this.order = this.storage.get('CHANNEL_ORDER') || Object.keys(channels);

    this.channels = this.order.map((id) => {
      const a: { name: string } = channels[id];

      return {
        ...a,
        id
      };
    });
  }
}
