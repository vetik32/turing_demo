import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';

import { AppMaterialModule } from './app-material/app-material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { SettingsModule } from './settings/settings.module';
import { TweetsModule } from './tweets/tweets.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, //
    AppRoutingModule,
    FlexLayoutModule,
    AppMaterialModule,
    LayoutModule,
    TweetsModule,
    SettingsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
