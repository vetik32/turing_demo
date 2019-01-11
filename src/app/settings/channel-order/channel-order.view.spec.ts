import { CdkDragDrop, DragDropModule } from '@angular/cdk/drag-drop';
import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ChannelOrderView, OrderItem } from './channel-order.view';

describe('ChannelOrderView', () => {
  let testComponent: ChannelOrderView;
  let fixture: ComponentFixture<ChannelOrderView>;
  let entities: OrderItem[];
  let theList: DebugElement;

  beforeEach(async(() => {

    entities = [{ id: '1', name: 'Item 1' }, { id: '2', name: 'Item 2' }, { id: '3', name: 'Item 3' }];

    TestBed.configureTestingModule({
        imports: [DragDropModule],
        declarations: [ChannelOrderView]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelOrderView);
    testComponent = fixture.componentInstance;
    testComponent.entities = entities;
    fixture.detectChanges();
    theList = fixture.debugElement.query(By.css('.order-list'));

  });

  it('should create', () => {
    expect(testComponent).toBeTruthy();
  });

  it('should render 3 items', () => {
    expect(theList.children.length).toEqual(3);
    expect(theList.children[0].nativeElement.innerHTML).toEqual('Item 1');
    expect(theList.children[1].nativeElement.innerHTML).toEqual('Item 2');
    expect(theList.children[2].nativeElement.innerHTML).toEqual('Item 3');
  });

  it('should emit an event when drop happens', (done) => {
    testComponent.orderChange.subscribe((order) => {
      expect(order).toEqual(['2', '3', '1']);
      done();
    });

    fixture.detectChanges();

    const cdkDragDropEvent: CdkDragDrop<string[]> = {
      previousIndex: 0,
      currentIndex: 2
    } as CdkDragDrop<string[]>;

    testComponent.drop(cdkDragDropEvent);
  });
});
