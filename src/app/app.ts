import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { Segitigaluas } from "./components/segitigaluas/segitigaluas";
import { Penjumlahan } from "./components/penjumlahan/penjumlahan";
import { TampildataComponent } from "./components/tampildata/tampildata";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatToolbarModule, MatIconModule, MatCardModule, Segitigaluas, Penjumlahan, TampildataComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('service-angular');
}
