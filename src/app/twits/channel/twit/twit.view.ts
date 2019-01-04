import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'dmo-twit-view',
  templateUrl: './twit.view.html',
  styleUrls: ['./twit.view.scss']
})
export class TwitView implements OnInit {
  @Input() twit: any;

  constructor() {
  }

  ngOnInit() {
  }

}
