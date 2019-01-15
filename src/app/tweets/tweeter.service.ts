import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Tweet } from './tweet.model';

const apiHostUrl = 'http://localhost:7890';

@Injectable({ providedIn: 'root' })
export class TweeterService {
  private userTimelineUrl = `${apiHostUrl}/1.1/statuses/user_timeline.json`; // URL to web api
  private retwitUrl = `${apiHostUrl}//1.1/statuses/retweet/:id.json`; // URL to web api

  constructor(private http: HttpClient) {}

  /** GET tweets from the server */
  getTweets(screenName: string, count: number = 30): Observable<Tweet[]> {
    return this.http
      .get<Tweet[]>(`${this.userTimelineUrl}?screen_name=${screenName.toLocaleLowerCase()}&count=${count}`)
      .pipe(
        tap((_) => console.log('fetched tweets for', screenName)),
        catchError(this.handleError('getTweets', []))
      );
  }

  retweet(id: string, text: string) {
    console.log('retweet', id, 'text:', text);
    /*
        return this.http.post(`${this.retwitUrl.replace(':id', id)}`, { text }).pipe(
          tap((response) => console.log('retweeted', response)),
          catchError(this.handleError('retweet', []))
        );
    */
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result);
    };
  }
}
