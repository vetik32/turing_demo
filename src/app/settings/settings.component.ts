import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../storage/local-storage.service';

@Component({
  selector: 'dmo-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  private twits: number;

  constructor(private storage: LocalStorageService) {
  }

  ngOnInit() {
    this.twits = this.storage.get('TWEET_COUNT');
  }

  setTweetsCount($event: any) {
    this.storage.save('TWEET_COUNT', $event.target.value);
  }
}
