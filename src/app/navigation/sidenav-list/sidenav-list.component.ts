import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { metaRoutes } from '../../meta-routes';

@Component({
  selector: 'dmo-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();

  public menu;

  constructor() {
    this.menu = metaRoutes.filter(route => route.path).map(({path, label, icon}) => ({path: '/' + path, label, icon}));
  }

  ngOnInit() {
  }

  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }

}
