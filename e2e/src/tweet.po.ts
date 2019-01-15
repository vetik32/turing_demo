import { $, browser, by, element, $$ } from 'protractor';

export class TweetPage {
  navigateTo() {
    return browser.get('/tweets');
  }

  getTitleEl() {
    return $('.mat-h1');
  }

  getFirstChannelTitle() {
    return this.getChannels()
      .first()
      .all(by.css('mat-card-title'))
      .first()
      .getText();
  }

  getChannels() {
    return element.all(by.css('dmo-channel-view'));
  }

  getFirstChannelTweets() {
    return $$('dmo-channel-view dmo-tweet-view');
  }
}
