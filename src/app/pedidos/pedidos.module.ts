import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedidosComponent } from './pedidos.component';
import { FazerPedidoComponent } from './fazer-pedido/fazer-pedido.component';
import { TodosPedidosComponent } from './todos-pedidos/todos-pedidos.component';
import { VisualizarPedidosComponent } from './visualizar-pedidos/visualizar-pedidos.component';
import { FormsModule } from '@angular/forms';
import { DescCompletaPipe } from '../desc-completa.pipe';
import { PedidosRoutingModule } from './route-pedidos.module';



@NgModule({
  declarations: [
    PedidosComponent,
    FazerPedidoComponent,
    TodosPedidosComponent,
    VisualizarPedidosComponent,
    DescCompletaPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    PedidosRoutingModule
  ]
})
export class PedidosModule { }
