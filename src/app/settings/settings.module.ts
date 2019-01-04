import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppMaterialModule } from '../app-material/app-material.module';
import { ChannelOrderView } from './channel-order/channel-order.view';
import { SettingsComponent } from './settings.component';
import { ThemePickerModule } from './theme-picker/theme-picker.module';

@NgModule({
  declarations: [SettingsComponent, ChannelOrderView],
  imports: [
    CommonModule, //
    ThemePickerModule,
    DragDropModule,
    AppMaterialModule,
    FlexLayoutModule
  ]
})
export class SettingsModule {}
