export interface MetaRoute {
  path: string;
  label: string;
  icon: string;
}

export const metaRoutes: MetaRoute[] = [
  {
    path: 'twits',
    label: 'Twits',
    icon: 'speaker_notes'
  },
  {
    path: 'settings',
    label: 'Settings',
    icon: 'settings'
  },
];
