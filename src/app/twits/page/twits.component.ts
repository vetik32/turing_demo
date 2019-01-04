import { Component, OnInit } from '@angular/core';

import { channels } from '../../in-memory-data.service';
import { LocalStorageService } from '../../storage/local-storage.service';


@Component({
  selector: 'dmo-content',
  templateUrl: './twits.component.html',
  styleUrls: ['./twits.component.scss']
})
export class TwitsComponent implements OnInit {
  sortableEntities: object[] = [];
  order: [] = [];

  constructor(private storage: LocalStorageService) {
    this.order = this.storage.get('CHANNEL_ORDER') || Object.keys(channels);

    this.sortableEntities = this.order.map((id) => {
      const a: { name: string } = channels[id];

      return {
        ...a,
        id
      };
    });

  }

  ngOnInit() {
  }
}
