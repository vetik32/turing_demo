import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { Tweet } from '../../tweet.model';

@Component({
  selector: 'dmo-twit-view',
  templateUrl: './twit.view.html',
  styleUrls: ['./twit.view.scss'],
})
export class TwitView {
  @Input() twit: Tweet;
  @Output() retwit = new EventEmitter();

  onRetwit() {
    this.retwit.emit();
  }
}
