import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Segitiga {

  constructor() { }

  // Method untuk menghitung luas segitiga menggunakan Observable
  hitungLuas(alas: number, tinggi: number): Observable<number> {
    const luas = (alas * tinggi) / 2;
    return of(luas); // Mengembalikan Observable dengan nilai luas
  }
}

