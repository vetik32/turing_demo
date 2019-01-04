import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelOrderView } from './channel-order.view';

describe('ChanelOrderComponent', () => {
  let component: ChannelOrderView;
  let fixture: ComponentFixture<ChannelOrderView>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChannelOrderView ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelOrderView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
