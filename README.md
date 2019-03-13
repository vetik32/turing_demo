# Code challenge #1 - TwitterAggregator

[![Build Status](https://travis-ci.com/vetik32/turing_demo.svg?branch=master)](https://travis-ci.com/vetik32/turing_demo)
[![Coverage Status](https://coveralls.io/repos/github/vetik32/turing_demo/badge.svg?branch=master)](https://coveralls.io/github/vetik32/turing_demo?branch=master)


## Part I: 

Use the Twitter API to display three columns containing the last 30 tweets from @MakeSchool, @newsycombinator and @ycombinator. Each tweet should include:

* The tweet content
* A well-formatted created_at date
* A link to the tweet
* For retweets and mentions, the username should be included.

## Part II: 

1. Make an ”edit layout” view that has a form to change the layout settings.
1. Use LocalStorage to persist and load the layout settings.
1. Configurable settings could include (you decide; you can pick your own):
    1. The order of the columns.
    1. The time range of the tweets shown.
    1. The number of tweets shown in each column.
    1. The overall palette/skin of the page.
1. The”edit layout” panel can appear either on the same page as the tweets page, on its own page, or embedded within the tweets layout - whichever you would like. There should be a straightforward way to toggle between edit and view modes, and it should be clear to the user which mode they are currently in.

## Part III: Additional Challenges
If you feel inspired, here are more things you can do:

* Ensure a good responsive experience on mobile phones and tablets
* Use an interaction (like drag and drop) instead of a form field to order the columns
* Add another feature you feel is missing from our application
* Adding unit tests will be great

## Build, start and test
This project was generated with ng-cli - so you know what to do

