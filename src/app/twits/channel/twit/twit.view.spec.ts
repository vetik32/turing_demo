import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TimeAgoPipe } from 'time-ago-pipe';

import { AppMaterialModule } from '../../../app-material/app-material.module';

import { TwitView } from './twit.view';

describe('TwitComponent', () => {
  let component: TwitView;
  let fixture: ComponentFixture<TwitView>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        AppMaterialModule
      ],
      declarations: [ TwitView, TimeAgoPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitView);
    component = fixture.componentInstance;
    component.twit = {user:{}};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
