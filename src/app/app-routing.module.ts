import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TweetsComponent } from './tweets/page/tweets.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'twits',
    pathMatch: 'full',
  },
  {
    path: 'twits',
    component: TweetsComponent,
  },
  {
    path: 'settings',
    component: SettingsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
