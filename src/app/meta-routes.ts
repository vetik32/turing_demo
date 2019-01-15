export interface MetaRoute {
  path: string;
  label: string;
  icon: string;
}

export const metaRoutes: MetaRoute[] = [
  {
    path: 'tweets',
    label: 'Tweets',
    icon: 'speaker_notes'
  },
  {
    path: 'settings',
    label: 'Settings',
    icon: 'settings'
  },
];
