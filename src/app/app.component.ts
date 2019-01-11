import { Component } from '@angular/core';
import { MetaRoute, metaRoutes } from './meta-routes';

@Component({
  selector: 'dmo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'turing-demo';
  private appTopMenu: Partial<MetaRoute>[];

  constructor() {
    this.appTopMenu = metaRoutes.filter((route) => route.path).map(({ path, label }) => ({ path: '/' + path, label }));
  }
}
