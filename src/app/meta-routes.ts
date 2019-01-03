import { TweetsComponent } from './tweets/page/tweets.component';
import { SettingsComponent } from './settings/settings.component';

export const metaRoutes = [
  {
    path: '',
    redirectTo: 'twits',
    pathMatch: 'full',
  },
  {
    path: 'twits',
    component: TweetsComponent,
    label: 'Twits',
    icon: 'speaker_notes'
  },
  {
    path: 'settings',
    component: SettingsComponent,
    label: 'Settings',
    icon: 'settings'
  },
];
