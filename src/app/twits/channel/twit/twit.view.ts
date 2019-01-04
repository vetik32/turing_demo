import { Component, Input } from '@angular/core';

@Component({
  selector: 'dmo-twit-view',
  templateUrl: './twit.view.html',
  styleUrls: ['./twit.view.scss']
})
export class TwitView {
  @Input() twit: any;
}
