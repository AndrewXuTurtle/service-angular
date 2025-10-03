import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Penjumlahan1 } from '../../service/penjumlahan';

@Component({
  selector: 'app-penjumlahan',
  imports: [FormsModule, CommonModule, MatFormFieldModule, MatInputModule, MatButtonModule],
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
