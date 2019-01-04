import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatBadgeModule,
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule,
  MatTooltipModule,
  MatGridListModule
} from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const matModules = [
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
  MatGridListModule,
  MatTooltipModule,
  MatBadgeModule,
  MatButtonModule,
  MatInputModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule,
  MatCardModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...matModules
  ],
  exports: [
    BrowserAnimationsModule,
    ...matModules
  ]
})
export class AppMaterialModule {
}
