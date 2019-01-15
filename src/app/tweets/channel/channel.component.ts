import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { LocalStorageService } from '../../storage/local-storage.service';
import { RetweetDialogView } from '../retweet-dialog/retweet-dialog.view';
import { Tweet } from '../tweet.model';
import { TweeterService } from '../tweeter.service';

@Component({
  selector: 'dmo-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.scss']
})
export class ChannelComponent implements OnInit {
  @Input() title: string;
  @Input() channel: string;
  public tweets: Tweet[] = [];

  constructor(
    private twitterService: TweeterService,
    private storage: LocalStorageService,
    private retwitDialog: MatDialog
  ) {}

  ngOnInit() {
    if (this.channel) {
      this.getMessages();
    }
  }

  getMessages(): void {
    this.twitterService
      .getTweets(this.channel, this.storage.get('TWEET_COUNT'))
      .subscribe((tweets) => (this.tweets = tweets));
  }

  openRetweetDialog(tweet: Tweet) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.data = tweet;

    const dialogRef = this.retwitDialog.open(RetweetDialogView, dialogConfig);

    dialogRef.afterClosed().subscribe((text) => this.twitterService.retweet(tweet.id_str, text));
  }
}
