import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private jsonUrl = 'director.json';
  constructor(private http: HttpClient) { }

  getNames(): Observable<any> {
    return this.http.get<any>(this.jsonUrl);
  }
}
