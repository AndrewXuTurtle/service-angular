import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Penjumlahan1 {
    constructor() { }
  
    // Method untuk menghitung penjumlahan menggunakan Observable
    hitungJumlah(a: number, b: number): Observable<number> {
      const jumlah = a + b;
      return of(jumlah); // Mengembalikan Observable dengan nilai jumlah
    }
}
