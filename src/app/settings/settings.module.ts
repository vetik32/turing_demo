import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsComponent } from './settings.component';
import { AppMaterialModule } from '../app-material/app-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [SettingsComponent],
  imports: [
    CommonModule,
    AppMaterialModule,
    FlexLayoutModule
  ]
})
export class SettingsModule { }
