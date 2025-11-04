import { Routes } from '@angular/router';
import { InicioComponent } from './inicio';
import { DetalhesProdutoComponent } from './detalhes-produto';

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'produto/:id', component: DetalhesProdutoComponent},
];
