import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { TampildataService } from '../../service/tampildata';

@Component({
  selector: 'app-tampildata',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './tampildata.html',
  styleUrl: './tampildata.css'
})
export class TampildataComponent implements OnInit {
  quotes: any[] = [];
  displayedColumns: string[] = ['id', 'quote', 'author'];

  constructor(private tampildataService: TampildataService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.tampildataService.getQuotes().subscribe(data => {
      this.quotes = data.quotes;
      this.cdr.detectChanges(); // Fix ExpressionChangedAfterItHasBeenCheckedError
    });
  }
}