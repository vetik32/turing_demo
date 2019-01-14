import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, NgModule } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { TimeAgoPipe } from 'time-ago-pipe';
import { AppMaterialModule } from '../../app-material/app-material.module';
import { Tweet } from '../tweet.model';

import { RetweetDialogView } from './retweet-dialog.view';

describe('RetweetDialogView', () => {
  let dialog: MatDialog;
  let overlayContainerElement: HTMLElement;
  let mockTweet: Tweet;
  let noop: ComponentFixture<NoopComponent>;

  beforeEach(() => {
    mockTweet = {
      created_at: 'Thu Dec 27 22:02:05 +0000 2018',
      id_str: '123',
      text: 'tweet text',
      user: {
        screen_name: 'AMUSER',
        profile_image_url: 'AMUSER url'
      }
    } as Tweet;

    TestBed.configureTestingModule({
      imports: [DialogTestModule],
      providers: [
        {
          provide: OverlayContainer,
          useFactory: () => {
            overlayContainerElement = document.createElement('div');
            overlayContainerElement.setAttribute('id', 'zzz');
            return { getContainerElement: () => overlayContainerElement };
          }
        }
      ]
    });

    dialog = TestBed.get(MatDialog);

    noop = TestBed.createComponent(NoopComponent);
  });

  it('shows dialog with tweet details (user, text, create_at)', (done) => {

    const config = {
      data: mockTweet
    };
    const dialogRef = dialog.open(RetweetDialogView, config);

    noop.detectChanges(); // Updates the dialog in the overlay

    const title = overlayContainerElement.querySelectorAll('#mat-dialog-title-0');
    const screenName = overlayContainerElement.querySelectorAll('.screen-name').item(0);
    const time = overlayContainerElement.querySelectorAll('.time').item(0);
    const content = overlayContainerElement.querySelectorAll('.content').item(0);
    const retweetButton = overlayContainerElement.querySelector('.mat-dialog-actions .mat-primary') as HTMLElement;
    const comment = overlayContainerElement.querySelector('input');

    comment.value = 'a comment';
    comment.dispatchEvent(new Event('input'));

    expect(title.item(0).textContent).toContain('Retweet this to your followers?');
    expect(screenName.textContent).toContain(`@${mockTweet.user.screen_name}`);
    expect(time.textContent).toContain('18 days ago');
    expect(content.textContent).toContain(mockTweet.text);
    expect(retweetButton.textContent).toContain('Retweet');
    //
    dialogRef.afterClosed().subscribe((text) => {
      expect(text).toEqual('a comment');

      done();
    });

    retweetButton.click();
  });

  it('should close the dialog', (done) => {
    const dialogRef = dialog.open(RetweetDialogView, {});

    noop.detectChanges(); // Updates the dialog in the overlay

    const closeButton = overlayContainerElement.querySelector('.mat-dialog-actions .closeButton') as HTMLElement;

    expect(closeButton.textContent).toContain('Close');
    //
    dialogRef.afterClosed().subscribe((text) => {
      expect(text).toBeUndefined();

      done();
    });

    closeButton.click();
  });
});

// Noop component is only a workaround to trigger change detection
@Component({
  template: ''
})
class NoopComponent {}

const TEST_DIRECTIVES = [RetweetDialogView, NoopComponent, TimeAgoPipe];

@NgModule({
  imports: [AppMaterialModule, ReactiveFormsModule],
  exports: TEST_DIRECTIVES,
  declarations: TEST_DIRECTIVES,
  entryComponents: [RetweetDialogView]
})
class DialogTestModule {}
