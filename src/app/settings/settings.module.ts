import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppMaterialModule } from '../app-material/app-material.module';

import { ChannelOrderView } from './channel-order/channel-order.view';
import { SettingsComponent } from './settings.component';

@NgModule({
  declarations: [SettingsComponent, ChannelOrderView],
  imports: [
    CommonModule, //
    DragDropModule,
    AppMaterialModule,
    FlexLayoutModule
  ]
})
export class SettingsModule {}
