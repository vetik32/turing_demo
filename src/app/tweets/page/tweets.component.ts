import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../storage/local-storage.service';

import { channels } from '../../in-memory-data.service';


@Component({
  selector: 'dmo-content',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.scss']
})
export class TweetsComponent implements OnInit {
  sortableEntities: object[] = [];
  order: [] = [];

  constructor(private storage: LocalStorageService) {
    this.order = this.storage.get('CHANNEL_ORDER') || Object.keys(channels);

    console.log('this.order', this.order);
    console.log('channels', channels);
    this.sortableEntities = this.order.map((id) => {
      const a: { name: string } = channels[id];

      return {
        ...a,
        api: a.name.replace(' ', ''),
        id
      };
    });

  }

  ngOnInit() {
  }
}
