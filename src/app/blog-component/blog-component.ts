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
      titulo: 'Gol CL 1.8 1992', autor: 'Gabriel', data: '2025-09-15',
      conteudo: 'Meu quadrado', curtidas: 0, comentarios: [], novoComentario: '',
      imagem: 'https://i.ytimg.com/vi/zivtu0H8Bj4/maxresdefault.jpg'
    },
    { 
      titulo: 'Joaninha', autor: 'Ryan', data: '2025-09-16',
      conteudo: 'Meu redondo', curtidas: 0, comentarios: [], novoComentario: '',
      imagem: 'https://i.pinimg.com/736x/b2/4e/d2/b24ed2f4e3997e0f202038046de45690.jpg'
    },
    { 
      titulo: 'Só a agradecer', autor: 'Debi e Loide', data: '2025-09-17',
      conteudo: 'Comprei minha primeira nave! ', curtidas: 0, comentarios: [], novoComentario: '',
      imagem: 'https://i.redd.it/1fhqc0c6au2c1.jpg'
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
