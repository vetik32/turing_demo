import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwittsComponent } from './tweets.component';

describe('TweetsComponent', () => {
  let component: TwittsComponent;
  let fixture: ComponentFixture<TwittsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwittsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwittsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
