import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../guard/auth.guard';
//import { FazerPedidoComponent } from '../pedidos/fazer-pedido/fazer-pedido.component';
import { LoginComponent } from '../login/login.component';
//import { TodosPedidosComponent } from '../pedidos/todos-pedidos/todos-pedidos.component';

const routes: Routes = [
  {
    path:'pedidos',
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
    loadChildren: () => import('../pedidos/pedidos.module').then(m => m.PedidosModule)
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'',
    redirectTo: 'pedidos',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class RouteRoutingModule { }
