import { Injectable } from '@angular/core';

const STORAGE_KEY = 'turing_demo_settings';

interface AppSettings {
  TWEET_COUNT: number;
  CHANNEL_ORDER: [];
}

const defaultSettings = {
  TWEET_COUNT: 30
} as AppSettings;

export type SETTINGS_KEYS = keyof AppSettings;

@Injectable({providedIn: 'root'})
export class LocalStorageService {
  private readonly APP_SETTINGS: AppSettings;

  constructor() {
    if (window.localStorage) {
      this.APP_SETTINGS = Object.assign(defaultSettings, JSON.parse(localStorage.getItem(STORAGE_KEY)));
    } else {
      this.APP_SETTINGS = defaultSettings;
    }
  }

  public save(key: SETTINGS_KEYS, value: any): void {
    this.APP_SETTINGS[key] = value;

    if (window.localStorage) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.APP_SETTINGS));
    }
  }

  public get(key: SETTINGS_KEYS): any {
    return this.APP_SETTINGS[key];
  }
}

