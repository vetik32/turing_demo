import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TweetsModule } from './tweets/tweets.module';
import { SettingsModule } from './settings/settings.module';
import { AppMaterialModule } from './app-material/app-material.module';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { HeaderComponent } from './navigation/header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    SidenavListComponent,
    HeaderComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TweetsModule,
    SettingsModule,
    FlexLayoutModule,
    AppMaterialModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
