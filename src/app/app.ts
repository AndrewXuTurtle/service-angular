import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Segitigaluas } from "./components/segitigaluas/segitigaluas";
import { Penjumlahan } from "./components/penjumlahan/penjumlahan";
import { TampildataComponent } from "./components/tampildata/tampildata";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Segitigaluas, Penjumlahan, TampildataComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('service-angular');
}
