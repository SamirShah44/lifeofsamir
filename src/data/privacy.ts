export type PrivacyApp = {
  name: string;
  developer: string;
  description: string;
  href: string;
  platform: string;
  lastUpdated: string;
};

// Add future apps here. /privacy automatically renders one card per entry.
export const PRIVACY_APPS: PrivacyApp[] = [
  {
    name: 'Exile Crusade',
    developer: 'Typhoon Labs',
    description: 'Privacy information and data practices for Exile Crusade.',
    href: '/exile-crusade/privacy-policy',
    platform: 'Android / Google Play',
    lastUpdated: 'August 14, 2026',
  },
];
