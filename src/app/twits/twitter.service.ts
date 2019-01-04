import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Message } from './channel/channel.model';

@Injectable({providedIn: 'root'})
export class TwitterService {

  private messagesUrl = 'http://localhost:7890/1.1/statuses/user_timeline.json';  // URL to web api

  constructor(
    private http: HttpClient,
  ) {
  }

  /** GET twits from the server */
  getMessages(screen_name: string, count: number = 30): Observable<Message[]> {
    return this.http.get<Message[]>(`${this.messagesUrl}?screen_name=${screen_name.toLocaleLowerCase()}&count=${count}`)
      .pipe(
        tap(_ => console.log('fetched twits for', screen_name)),
        catchError(this.handleError('getMessages', []))
      );
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
      return of(result as T);
    };
  }

}
