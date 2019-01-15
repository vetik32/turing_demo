import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TimeAgoPipe } from 'time-ago-pipe';

import { AppMaterialModule } from '../app-material/app-material.module';

import { ChannelComponent } from './channel/channel.component';
import { ChannelView } from './channel/channel.view';
import { TweetView } from './channel/tweet/tweet.view';

import { TweetsComponent } from './tweets.component';

describe('TweetsComponent', () => {
  let component: TweetsComponent;
  let fixture: ComponentFixture<TweetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [AppMaterialModule, HttpClientModule],
        declarations: [TweetsComponent, ChannelComponent, ChannelView, TweetView, TimeAgoPipe]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
