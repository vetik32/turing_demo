import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Channel.ViewComponent } from './channel.view.component';

describe('Channel.ViewComponent', () => {
  let component: Channel.ViewComponent;
  let fixture: ComponentFixture<Channel.ViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Channel.ViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Channel.ViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
