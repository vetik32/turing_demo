import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TimeAgoPipe } from 'time-ago-pipe';

import { AppMaterialModule } from '../app-material/app-material.module';

import { ChannelComponent } from './channel/channel.component';
import { ChannelView } from './channel/channel.view';
import { TwitView } from './channel/twit/twit.view';

import { TwitsComponent } from './twits.component';

describe('TweetsComponent', () => {
  let component: TwitsComponent;
  let fixture: ComponentFixture<TwitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [AppMaterialModule, HttpClientModule],
        declarations: [TwitsComponent, ChannelComponent, ChannelView, TwitView, TimeAgoPipe]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
