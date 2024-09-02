import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  add(a: number, b: number): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/add?a=${a}&b=${b}`);
  }

  subtract(a: number, b: number): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/subtract?a=${a}&b=${b}`);
  }

  multiply(a: number, b: number): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/multiply?a=${a}&b=${b}`);
  }

  divide(a: number, b: number): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/divide?a=${a}&b=${b}`);
  }
}
