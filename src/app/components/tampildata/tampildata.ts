import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TampildataService } from '../../service/tampildata';

@Component({
  selector: 'app-tampildata',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tampildata.html',
  styleUrl: './tampildata.css'
})
export class TampildataComponent implements OnInit {
  quotes: any[] = [];

  constructor(private tampildataService: TampildataService) {}

  ngOnInit(): void {
    this.tampildataService.getQuotes().subscribe(data => {
      this.quotes = data.quotes;
    });
  }
}