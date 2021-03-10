import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Funcionario } from '../funcionario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private route: Router) { }

  private estaLogado: boolean = false
  mostrarMenu: EventEmitter<boolean> = new EventEmitter();

  Login(usuario: Funcionario){
    if(usuario.nome == "gustavo" && usuario.senha == "abc123"){
      this.estaLogado = true;
      this.mostrarMenu.emit(true)
      this.route.navigate(['/'])
      
    }
    else{
      this.estaLogado = false
    }
  }

  verificarLogin(){
    return this.estaLogado
  }
}

