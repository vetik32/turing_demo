import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsComponent } from './settings.component';
// import { StorageModule } from '../storage/storage.module';

@NgModule({
  declarations: [SettingsComponent],
  imports: [
    CommonModule,
    // StorageModule
  ]
})
export class SettingsModule { }
