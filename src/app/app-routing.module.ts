import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TwitsComponent } from './twits/page/twits.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'twits',
    pathMatch: 'full',
  },
  {
    path: 'twits',
    component: TwitsComponent,
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
