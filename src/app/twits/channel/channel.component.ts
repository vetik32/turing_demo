import { Component, Input, OnInit } from '@angular/core';
import { LocalStorageService } from '../../storage/local-storage.service';
import { TwitterService } from '../twitter.service';
import { Message } from './channel.model';

@Component({
  selector: 'dmo-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.scss']
})
export class ChannelComponent implements OnInit {
  @Input() title: string;
  @Input() channel: string;
  public messages: Message[] = [];

  constructor(private twitterService: TwitterService, private storage: LocalStorageService) {}

  ngOnInit() {
    this.getMessages();
  }

  getMessages(): void {
    this.twitterService.getMessages(this.channel.substring(1), this.storage.get('TWEET_COUNT'))
      .subscribe(messages => this.messages = messages);
  }
}
