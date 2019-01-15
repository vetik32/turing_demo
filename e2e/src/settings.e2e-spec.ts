import { SettingsPage } from './settings.po';
import { TweetPage } from './tweet.po';
import h = require('protractor-helpers');

describe('Settings Page', () => {
  let settingsPage: SettingsPage;
  let tweetPage: TweetPage;

  beforeEach(() => {
    settingsPage = new SettingsPage();
    tweetPage = new TweetPage();
  });

  it('check Settings page', () => {
    settingsPage.navigateTo();
    expect(settingsPage.getTitleEl()).not.toBeDisplayed();
    h.maximizeWindow(500, 1000);

    expect(settingsPage.getTitleEl()).toBeDisplayed();
    expect(settingsPage.getTitleEl().getText()).toEqual('Settings');
    expect(settingsPage.getTweetLimitValue()).toEqual('30');
  });

  xit('should change tweets limit (and store in localstorage) - if proxy server is online', function() {
    settingsPage.navigateTo();
    h.maximizeWindow(500, 1000);
    settingsPage.getTweetLimitEl().click();
    settingsPage.getTweetLimitEl().clear();
    settingsPage.getTweetLimitEl().sendKeys('5');
    settingsPage.getTitleEl().click();

    expect(settingsPage.getTweetLimitValue()).toEqual('5');

    tweetPage.navigateTo();

    h.maximizeWindow(1200, 1000);

    // 3 x 5
    expect(tweetPage.getFirstChannelTweets().count()).toEqual(15);

    settingsPage.navigateTo();
    expect(settingsPage.getTweetLimitValue()).toEqual('5');
  });
});
