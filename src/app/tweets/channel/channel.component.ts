import { Component, Input, OnInit } from '@angular/core';
import { ChannelService } from './channel.service';
import { Message } from './channel.model';
import { LocalStorageService } from '../../storage/local-storage.service';

@Component({
  selector: 'dmo-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.scss']
})
export class ChannelComponent implements OnInit {
  @Input() title: string;
  @Input() channel: string;
  public messages: Message[] = [];

  constructor(private messageService: ChannelService, private storage: LocalStorageService) {
  }

  ngOnInit() {
    this.getMessages();
  }

  getMessages(): void {
    this.messageService.getMessages(this.channel.substring(1), this.storage.get('TWEET_COUNT'))
      .subscribe(messages => this.messages = messages);
  }
}
