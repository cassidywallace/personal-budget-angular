import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  dataUrl: string = 'http://localhost:3000/budget'
  constructor(private http: HttpClient) {}

  getChartData(): Observable<any[]> {
    return this.http.get<any[]>(this.dataUrl);
    }
  }
