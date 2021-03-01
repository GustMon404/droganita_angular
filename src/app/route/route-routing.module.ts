import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { FazerPedidoComponent } from '../pedidos/fazer-pedido/fazer-pedido.component';
import { LoginComponent } from '../login/login.component';
//import { TodosPedidosComponent } from '../pedidos/todos-pedidos/todos-pedidos.component';

const routes: Routes = [
  //{path:'', component: FazerPedidoComponent},
  //{path:'todos', component: TodosPedidosComponent},
  {path:'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RouteRoutingModule { }
