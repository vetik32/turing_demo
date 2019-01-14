import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { LocalStorageService } from '../../storage/local-storage.service';
import { RetweetDialogView } from '../retweet-dialog/retweet-dialog.view';
import { Tweet } from '../tweet.model';
import { TwitterService } from '../twitter.service';

@Component({
  selector: 'dmo-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.scss']
})
export class ChannelComponent implements OnInit {
  @Input() title: string;
  @Input() channel: string;
  public twits: Tweet[] = [];

  constructor(
    private twitterService: TwitterService,
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
      .subscribe((twits) => (this.twits = twits));
  }

  openRetwitDialog(twit: Tweet) {
    const dialogConfig = new MatDialogConfig();

    // dialogConfig.disableClose = true;
    // dialogConfig.autoFocus = true;
    dialogConfig.data = twit;

    const dialogRef = this.retwitDialog.open(RetweetDialogView, dialogConfig);

    dialogRef.afterClosed().subscribe((text) => this.twitterService.retweet(twit.id_str, text));
  }
}
