import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../../app-material/app-material.module';
import { StyleManager } from '../style-manager/style-manager';
import { ThemePickerView } from './theme-picker';

@NgModule({
  imports: [
    CommonModule, //
    AppMaterialModule,
  ],
  exports: [ThemePickerView],
  declarations: [ThemePickerView],
  providers: [StyleManager]
})
export class ThemePickerModule {
}
