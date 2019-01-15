import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ChannelView } from './channel/channel.view';
import { ChannelComponent } from './channel/channel.component';
import { TweetsComponent } from './tweets.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppMaterialModule } from '../app-material/app-material.module';
import { TimeAgoPipe } from 'time-ago-pipe';
import { TweetView } from './channel/tweet/tweet.view';
import { RetweetDialogView } from './retweet-dialog/retweet-dialog.view';

@NgModule({
  declarations: [
    ChannelView,
    TweetView,
    ChannelComponent,
    TweetsComponent,
    TimeAgoPipe,
    RetweetDialogView
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    AppMaterialModule,
    FlexLayoutModule
  ],
  exports: [
    ChannelComponent
  ],
  entryComponents: [
    RetweetDialogView
  ]
})
export class TweetsModule {
}
