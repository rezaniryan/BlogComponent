import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-atv1',
  imports: [FormsModule],
  templateUrl: './atv1.html',
  styleUrl: './atv1.css'
})
export class Atv1 {
  idade: number = 0;
  ano: number = new Date().getFullYear();

  getAnoNascimento(): number {
    return this.ano - this.idade;
  
  }
}
