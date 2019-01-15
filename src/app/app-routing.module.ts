import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TweetsComponent } from './tweets/tweets.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tweets',
    pathMatch: 'full',
  },
  {
    path: 'tweets',
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
