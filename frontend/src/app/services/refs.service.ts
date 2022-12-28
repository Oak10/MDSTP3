import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Refs } from '../common/refs';

@Injectable({
  providedIn: 'root'
})
export class RefsService {


  private baseUrl = 'http://localhost:8080/api/refs'


  constructor(private http: HttpClient){ }

  public getRefsList(): Observable<Refs[]> {
    return this.http.get<Refs[]>(this.baseUrl);
  }


}
