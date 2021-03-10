import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FazerPedidoComponent } from './fazer-pedido/fazer-pedido.component';
import { TodosPedidosComponent } from './todos-pedidos/todos-pedidos.component';

const routes: Routes = [
  {
    path:'fazerPedido',
    component: FazerPedidoComponent
  },
  {
    path:'todosPedidos',
    component: TodosPedidosComponent
  },
  {
    path:'',
    redirectTo: '/pedidos/fazerPedido',
    pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PedidosRoutingModule { }
