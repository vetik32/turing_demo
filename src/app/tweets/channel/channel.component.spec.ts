import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TimeAgoPipe } from 'time-ago-pipe';

import { AppMaterialModule } from '../../app-material/app-material.module';

import { ChannelComponent } from './channel.component';
import { ChannelView } from './channel.view';
import { TweetView } from './tweet/tweet.view';

describe('ChannelComponent', () => {
  let component: ChannelComponent;
  let fixture: ComponentFixture<ChannelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [
          CommonModule,
          HttpClientModule,
          AppMaterialModule,
          FlexLayoutModule
        ],
        declarations: [ChannelComponent, ChannelView, TweetView, TimeAgoPipe]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
