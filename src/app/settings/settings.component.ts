import { Component, HostBinding, OnInit } from '@angular/core';
import { LocalStorageService } from '../storage/local-storage.service';

import { channels } from '../in-memory-data.service';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'dmo-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  @HostBinding('class') componentCssClass;
  order: string[];
  sortableEntities: object[] = [];
  private twitsLimit: number;

  constructor(private storage: LocalStorageService, public overlayContainer: OverlayContainer) {
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

  onSetTheme(theme) {
    this.overlayContainer.getContainerElement().classList.add(theme);
    this.componentCssClass = theme;
  }
}
