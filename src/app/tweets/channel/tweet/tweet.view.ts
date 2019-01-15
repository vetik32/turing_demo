import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { Tweet } from '../../tweet.model';

@Component({
  selector: 'dmo-tweet-view',
  templateUrl: './tweet.view.html',
  styleUrls: ['./tweet.view.scss'],
})
export class TweetView {
  @Input() twit: Tweet;
  @Output() retwit = new EventEmitter();

  onRetwit() {
    this.retwit.emit();
  }
}
