import { Component, EventEmitter, Output } from '@angular/core';
import { metaRoutes } from '../../meta-routes';

@Component({
  selector: 'dmo-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() public sidenavToggle = new EventEmitter();
  public menu;

  constructor() {
    this.menu = metaRoutes.filter((route) => route.path).map(({path, label}) => ({path: '/' + path, label}));
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  };
}
