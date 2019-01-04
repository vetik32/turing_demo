import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { LocalStorageService } from '../../storage/local-storage.service';
import { StyleManager } from '../style-manager/style-manager';

interface DocsSiteTheme {
  name: string;
  accent: string;
  primary: string;
  isDark?: boolean;
  isDefault?: boolean;
}

@Component({
  selector: 'dmo-theme-picker',
  templateUrl: './theme-picker.html',
  styleUrls: ['./theme-picker.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  // tslint:disable-next-line:use-host-property-decorator
  host: {'aria-hidden': 'true'}
})
export class ThemePickerView implements OnInit, OnDestroy {
  currentTheme: DocsSiteTheme;
  themes: DocsSiteTheme[] = [
    {
      primary: '#673AB7',
      accent: '#FFC107',
      name: 'deeppurple-amber',
      isDark: false
    },
    {
      primary: '#3F51B5',
      accent: '#E91E63',
      name: 'indigo-pink',
      isDark: false
      // isDefault: true,
    },
    {
      primary: '#E91E63',
      accent: '#607D8B',
      name: 'pink-bluegrey',
      isDark: true
    },
    {
      primary: '#9C27B0',
      accent: '#4CAF50',
      name: 'purple-green',
      isDark: true
    }
  ];
  private _queryParamSubscription = Subscription.EMPTY;

  constructor(
    public styleManager: StyleManager,
    private localStorage: LocalStorageService,
    private _activatedRoute: ActivatedRoute
  ) {
    this.installTheme(this.localStorage.get('CURRENT_THEME_NAME'));
  }

  ngOnInit() {
    this._queryParamSubscription = this._activatedRoute.queryParamMap
      .pipe(
        map((params) => params.get('theme')),
        filter(Boolean)
      )
      .subscribe((themeName) => this.installTheme(themeName));
  }

  ngOnDestroy() {
    this._queryParamSubscription.unsubscribe();
  }

  installTheme(themeName: string) {
    const theme = this.themes.find((currentTheme) => currentTheme.name === themeName);

    if (!theme) {
      return;
    }

    this.currentTheme = theme;

    if (theme.isDefault) {
      this.styleManager.removeStyle('theme');
    } else {
      this.styleManager.setStyle('theme', `assets/${theme.name}.css`);
    }

    if (this.currentTheme) {
      this.localStorage.save('CURRENT_THEME_NAME', themeName);
    }
  }
}
