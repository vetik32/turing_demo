import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

import { AppMaterialModule } from '../app-material/app-material.module';
import { HeaderView } from './header/header.view';
import { LayoutComponent } from './layout.component';
import { SidenavListComponent } from './sidenav-list/sidenav-list.component';


@NgModule({
  declarations: [
    SidenavListComponent, //
    HeaderView,
    LayoutComponent
  ],
  imports: [
    CommonModule, //
    RouterModule,
    AppMaterialModule,
    FlexLayoutModule
  ],
  exports: [
    SidenavListComponent, //
    HeaderView,
    LayoutComponent
  ]
})
export class LayoutModule {}
