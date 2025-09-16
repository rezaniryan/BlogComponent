import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blog-component',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './blog-component.html',
  styleUrls: ['./blog-component.css']
})
export class BlogComponent {
  posts = [
    { 
      titulo: 'Gol CL 1.8 1992', autor: 'Gabriel Alesiunas', data: '15/09/2025',
      conteudo: 'Meu quadrado', curtidas: 0, comentarios: [], novoComentario: '',
      imagem: 'img/gol.jpg'
    },
    { 
      titulo: 'Joaninha', autor: 'Ryan Rezani', data: '15/09/2025',
      conteudo: 'Meu redondo', curtidas: 0, comentarios: [], novoComentario: '',
      imagem: 'img/corsa.jpg'
    },
    { 
      titulo: 'As lasanhas', autor: 'Garage dos baixos', data: '15/09/2025',
      conteudo: 'Rolezin', curtidas: 0, comentarios: [], novoComentario: '',
      imagem: 'img/carros.jpg'
    }
  ];

  curtir(p: any) { p.curtidas++; }
  comentar(p: any) {
    if (p.novoComentario.trim()) {
      p.comentarios.push(p.novoComentario);
      p.novoComentario = '';
    }
  }
}
