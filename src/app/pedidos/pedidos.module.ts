import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PedidosComponent } from './pedidos.component';
import { FazerPedidoComponent } from './fazer-pedido/fazer-pedido.component';
import { TodosPedidosComponent } from './todos-pedidos/todos-pedidos.component';
import { VisualizarPedidosComponent } from './visualizar-pedidos/visualizar-pedidos.component';

import { DescCompletaPipe } from './pipe/desc-completa.pipe';
import { PedidosRoutingModule } from './route-pedidos.module';
import { PedidosService } from './pedidos.service';
import { EncomendaPipe } from './pipe/encomenda.pipe';
import { ExpandirDirective } from './visualizar-pedidos/expandir.directive';




@NgModule({
  declarations: [
    PedidosComponent,
    FazerPedidoComponent,
    TodosPedidosComponent,
    VisualizarPedidosComponent,
    DescCompletaPipe,
    EncomendaPipe,
    ExpandirDirective,
  ],
  imports: [
    CommonModule,
    PedidosRoutingModule,
    FormsModule
  ],
  providers: [PedidosService]
})
export class PedidosModule { }
