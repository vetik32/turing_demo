import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { ChannelView } from './channel/channel.view';
import { InMemoryDataService } from '../in-memory-data.service';
import { ChannelComponent } from './channel/channel.component';
import { TweetsComponent } from './page/tweets.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    ChannelView,
    ChannelComponent,
    TweetsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FlexLayoutModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    )
  ],
  exports: [
    ChannelComponent
  ]
})
export class TweetsModule {
}
