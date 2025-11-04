import { Component, OnInit } from '@angular/core';
import { LojaService } from './loja-service';
import { Produto } from './produto';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DetalhesProdutoComponent } from './detalhes-produto';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inicio.html',
  styleUrls: ['./inicio.css']
})
export class InicioComponent implements OnInit {
  produtos: Produto[] = [];

  constructor(private lojaService: LojaService, private router: Router) {}

  ngOnInit() {
    this.lojaService.obterProdutos().subscribe({
      next: (data) => this.produtos = data,
      error: (err) => console.error('Erro ao carregar produtos:', err)
    });
  }

  verDetalhes(id: number) {
    this.router.navigate(['/produto', id]);
  }
}
