import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Segitiga } from '../../service/segitiga';

@Component({
  selector: 'app-segitigaluas',
  imports: [FormsModule, CommonModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './segitigaluas.html',
  styleUrl: './segitigaluas.css'
})
export class Segitigaluas {
  alas: number = 0;
  tinggi: number = 0;
  luas: number = 0;

  constructor(private segitigaService: Segitiga) {}

  // Method untuk menghitung luas saat user klik button
  hitungLuas(): void {
    if (this.alas > 0 && this.tinggi > 0) {
      this.segitigaService.hitungLuas(this.alas, this.tinggi).subscribe(result => {
        this.luas = result;
      });
    } else {
      this.luas = 0; // Reset jika input tidak valid
    }
  }
}