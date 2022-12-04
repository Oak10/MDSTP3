import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Quiz } from '../common/quiz';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  private baseUrl = 'http://localhost:8080/api/quiz'


  constructor(private http: HttpClient){ }

  public getQuizList(): Observable<Quiz[]> {
    return this.http.get<Quiz[]>(this.baseUrl);
  }
}
