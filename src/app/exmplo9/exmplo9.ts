import { Component } from '@angular/core';

@Component({
  selector: 'app-exmplo9',
  imports: [],
  templateUrl: './exmplo9.html',
  styleUrl: './exmplo9.css'
})
export class Exmplo9 {
lista: string[] = [];
  adicionarItem(event: any) {
    this.lista.push(event.target.value);
    event.target.value = '';
  }
}
