import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TampildataService {

  private apiUrl = 'https://dummyjson.com/quotes';

  constructor(private http: HttpClient) {}

  // Method untuk mengambil data quotes
  getQuotes(): Observable<any> { // Menggunakan any sebagai ganti QuotesResponse
    return this.http.get<any>(this.apiUrl);
  }
}