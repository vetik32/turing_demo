import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../storage/local-storage.service';

import { channels } from '../in-memory-data.service';

@Component({
  selector: 'dmo-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  order: string[];
  sortableEntities: object[] = [];
  private twitsLimit: number;

  constructor(private storage: LocalStorageService) {
    console.log('from storage', this.storage.get('CHANNEL_ORDER'));
    console.log('from object', Object.keys(channels));

    this.order = this.storage.get('CHANNEL_ORDER') || Object.keys(channels);
    this.twitsLimit = this.storage.get('TWEET_COUNT');

    this.sortableEntities = this.order.map((id) => ({...channels[id], id}));
  }

  ngOnInit() {
    console.log('settings ng init');
  }

  setTweetsCount($event: any) {
    this.storage.save('TWEET_COUNT', $event.target.value);
  }

  setOrder(newOrder: string[]) {
    this.storage.save('CHANNEL_ORDER', newOrder);
  }
}
