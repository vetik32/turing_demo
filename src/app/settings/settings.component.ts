import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, HostBinding } from '@angular/core';

import { channels } from '../channels';
import { LocalStorageService } from '../storage/local-storage.service';
import { OrderItem } from './channel-order/channel-order.view';

@Component({
  selector: 'dmo-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
  @HostBinding('class') componentCssClass;
  order: string[];
  sortableEntities: OrderItem[] = [];
  private tweetsLimit: number;

  constructor(private storage: LocalStorageService, public overlayContainer: OverlayContainer) {
    this.order = this.storage.get('CHANNEL_ORDER') || Object.keys(channels);
    this.tweetsLimit = this.storage.get('TWEET_COUNT');

    this.sortableEntities = this.order.map((id) => ({ ...channels[id], id }));
  }

  setTweetsCount($event: any) {
    this.storage.save('TWEET_COUNT', $event.target.value);
  }

  setOrder(newOrder: string[]) {
    this.storage.save('CHANNEL_ORDER', newOrder);
  }
}
