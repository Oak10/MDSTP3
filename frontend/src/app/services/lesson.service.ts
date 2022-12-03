import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Lesson } from '../common/lesson';

@Injectable({
  providedIn: 'root'
})
export class LessonService {
  private baseUrl = 'http://localhost:8080/api/lessons'


  constructor(private http: HttpClient){ }

  public getLessonsList(): Observable<Lesson[]> {
    return this.http.get<Lesson[]>(this.baseUrl);
  }
}
