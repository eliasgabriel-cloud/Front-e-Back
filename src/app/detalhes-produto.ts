import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LojaService } from './loja-service';
import { Produto } from './produto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalhes-produto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalhes-produto.html',
  styleUrls: ['./detalhes-produto.css']
})
export class DetalhesProdutoComponent implements OnInit {
  produto?: Produto;

  constructor(
    private route: ActivatedRoute,
    private lojaService: LojaService,
    private router: Router
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.lojaService.getProdutoPorId(id).subscribe({
      next: (data) => this.produto = data,
      error: (err) => console.error('Erro ao carregar produto:', err)
    });
  }

  voltar() {
    // Redireciona sempre para a página inicial
    this.router.navigate(['/']);
  }
}
