import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MetaRoute } from '../../meta-routes';

@Component({
  selector: 'dmo-header-view',
  templateUrl: './header.view.html',
  styleUrls: ['./header.view.scss']
})
export class HeaderView {
  @Input() menu: Partial<MetaRoute>[];
  @Output() public sidenavToggle = new EventEmitter();

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  };
}
