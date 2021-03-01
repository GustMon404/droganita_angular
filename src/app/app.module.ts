import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FazerPedidoComponent } from './pedidos/fazer-pedido/fazer-pedido.component';
import { FormsModule } from '@angular/forms';
import { VisualizarPedidosComponent } from './pedidos/visualizar-pedidos/visualizar-pedidos.component';
import { DescCompletaPipe } from './desc-completa.pipe';
import { TodosPedidosComponent } from './pedidos/todos-pedidos/todos-pedidos.component';
import { PedidosService } from './pedidos.service';
import { RouteRoutingModule } from './route/route-routing.module';
import { LoginComponent } from './login/login.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { PedidosModule } from './pedidos/pedidos.module';

@NgModule({
  declarations: [
    AppComponent,
    //FazerPedidoComponent,
    //VisualizarPedidosComponent,
    //DescCompletaPipe,
    //TodosPedidosComponent,
    LoginComponent,
    //PedidosComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouteRoutingModule,
    PedidosModule
  ],
  providers: [PedidosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
