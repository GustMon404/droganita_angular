import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FazerPedidoComponent } from './fazer-pedido/fazer-pedido.component';
import { FormsModule } from '@angular/forms';
import { VisualizarPedidosComponent } from './visualizar-pedidos/pedidos.component';
import { DescCompletaPipe } from './desc-completa.pipe';
import { TodosPedidosComponent } from './todos-pedidos/todos-pedidos.component';
import { PedidosService } from './pedidos.service';
import { RouteRoutingModule } from './route/route-routing.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    FazerPedidoComponent,
    VisualizarPedidosComponent,
    DescCompletaPipe,
    TodosPedidosComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouteRoutingModule
  ],
  providers: [PedidosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
