import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitView } from './twit.component';

describe('TwitComponent', () => {
  let component: TwitView;
  let fixture: ComponentFixture<TwitView>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwitView ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
