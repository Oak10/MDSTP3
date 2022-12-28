import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { Score } from '../common/score';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  private baseUrl = 'http://localhost:8080/api/scores'


  constructor(private http: HttpClient){ }

  public getScoresList(): Observable<Score[]> {
    return this.http.get<Score[]>(this.baseUrl);
  }

  public getTopScoresList(): Observable<Score[]> {
    return this.http.get<Score[]>(this.baseUrl + "/top");
  }


  public registerNew(userName: string, currentScore: number){

    let score = new Score(userName,currentScore);
    
    this.http.post<Score>(this.baseUrl, score).subscribe(
      data => {
        score = data;
      }
    )
    // .pipe(
    //   // catchError(this.handleError('addHero', hero))
    // );
  }

  // private handleError(error: HttpErrorResponse) {
  //   if (error.status === 0) {
  //     // A client-side or network error occurred. Handle it accordingly.
  //     console.error('An error occurred:', error.error);
  //   } else {
  //     // The backend returned an unsuccessful response code.
  //     // The response body may contain clues as to what went wrong.
  //     console.error(
  //       `Backend returned code ${error.status}, body was: `, error.error);
  //   }
  //   // Return an observable with a user-facing error message.
  //   return throwError(() => new Error('Something bad happened; please try again later.'));
  // }

}
