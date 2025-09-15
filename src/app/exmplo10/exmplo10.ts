import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exmplo10',
  imports: [FormsModule],
  templateUrl: './exmplo10.html',
  styleUrl: './exmplo10.css'
})
export class Exmplo10 {
email = '';
enviar() {alert('Email enviado para ${this.email}')};
}
