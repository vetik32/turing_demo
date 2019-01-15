import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TimeAgoPipe } from 'time-ago-pipe';

import { AppMaterialModule } from '../../../app-material/app-material.module';
import { Tweet, User } from '../../tweet.model';

import { TweetView } from './tweet.view';

describe('TwitComponent', () => {
  let component: TweetView;
  let fixture: ComponentFixture<TweetView>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppMaterialModule],
      declarations: [TweetView, TimeAgoPipe]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetView);
    component = fixture.componentInstance;
    component.twit = { user: {} as User } as Tweet;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
