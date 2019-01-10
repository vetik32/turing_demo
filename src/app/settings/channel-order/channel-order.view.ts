import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CdkDragDrop, moveItemInArray, } from '@angular/cdk/drag-drop';

@Component({
  selector: 'dmo-channel-order',
  templateUrl: './channel-order.view.html',
  styleUrls: ['./channel-order.view.scss']
})
export class ChannelOrderView implements OnInit {
  @Input() entities: any[] = [];
  @Output() orderChange = new EventEmitter<string[]>();
  order: string[] = [];

  ngOnInit() {
    this.order = this.entities.map(({id}) => id);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.entities, event.previousIndex, event.currentIndex);

    this.swap(event.previousIndex, event.currentIndex);
  }

  private swap(previousIndex, currentIndex) {

    this.order.splice(currentIndex, 0, this.order.splice(previousIndex, 1)[0]);

    this.orderChange.emit(this.order);
  }
}
