import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { Penjumlahan1 } from '../../service/penjumlahan';

@Component({
  selector: 'app-penjumlahan',
  imports: [FormsModule, CommonModule],
  templateUrl: './penjumlahan.html',
  styleUrl: './penjumlahan.css'
})
export class Penjumlahan {
  a: number = 0;
  b: number = 0;
  jumlah: number = 0;

  constructor(private penjumlahanService: Penjumlahan1) {}

  // Method untuk menghitung jumlah saat user klik button
  hitungJumlah(): void {
      this.penjumlahanService.hitungJumlah(this.a, this.b).subscribe(result => {
        this.jumlah = result;
      });
}
}
