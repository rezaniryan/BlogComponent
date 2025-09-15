import { Component } from '@angular/core';

@Component({
  selector: 'app-exmplo2',
  imports: [],
  templateUrl: './exmplo2.html',
  styleUrl: './exmplo2.css'
})
export class Exmplo2 {
contador: number = 0;
incrementar() { this.contador++; }
decrementar() { this.contador--; }
}
