import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ChannelView } from './channel/channel.view';
import { ChannelComponent } from './channel/channel.component';
import { TwitsComponent } from './page/twits.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppMaterialModule } from '../app-material/app-material.module';
import { TimeAgoPipe } from 'time-ago-pipe';
import { TwitView } from './channel/twit/twit.view';

@NgModule({
  declarations: [
    ChannelView,
    TwitView,
    ChannelComponent,
    TwitsComponent,
    TimeAgoPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AppMaterialModule,
    FlexLayoutModule
  ],
  exports: [
    ChannelComponent
  ]
})
export class TwitsModule {
}
