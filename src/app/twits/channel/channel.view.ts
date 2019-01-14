import { Component, Input } from '@angular/core';

@Component({
  selector: 'dmo-channel-view',
  templateUrl: './channel.view.html',
  styleUrls: ['./channel.view.scss']
})
export class ChannelView {
  @Input() title: string;
}
