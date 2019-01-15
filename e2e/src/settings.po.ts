import { $, browser } from 'protractor';

export class SettingsPage {
  navigateTo() {
    return browser.get('/settings');
  }

  getTitleEl() {
    return $('.mat-h1');
  }

  getTweetLimitEl() {
    return $('.mat-input-element');
  }

  getTweetLimitValue() {
    return this.getTweetLimitEl().getAttribute('value');
  }
}
