import { TweetPage } from './tweet.po';
import h = require('protractor-helpers');

describe('Tweets Page', () => {
  let tweetPage: TweetPage;

  beforeEach(() => {
    tweetPage = new TweetPage();
  });

  xit('check Tweets page (not working in headless mode)', () => {
    tweetPage.navigateTo();

    expect(tweetPage.getTitleEl()).not.toBeDisplayed();
    h.maximizeWindow(500, 1000);
    expect(tweetPage.getTitleEl()).toBeDisplayed();
    expect(tweetPage.getTitleEl().getText()).toEqual('Tweets');

    expect(tweetPage.getFirstChannelTitle()).toEqual('@Make School');
  });
});
