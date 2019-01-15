import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TimeAgoPipe } from 'time-ago-pipe';
import { AppMaterialModule } from '../../app-material/app-material.module';

import { ChannelView} from './channel.view';
import { TweetView } from './tweet/tweet.view';

describe('ChannelView', () => {
  let component: ChannelView;
  let fixture: ComponentFixture<ChannelView>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppMaterialModule,
      ],
      declarations: [ ChannelView, TweetView , TimeAgoPipe]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
