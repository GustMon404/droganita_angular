import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Funcionario } from '../funcionario';
import { environment } from 'src/environments/environment';
import { shareReplay, tap } from 'rxjs/operators';
import jwtDecode from 'jwt-decode';
import * as moment from 'moment';

interface JWTPayload {
  user_id: number;
  username: string;
  exp: number;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private route: Router, private http: HttpClient) { }

  private estaLogado: boolean = false
  mostrarMenu: EventEmitter<boolean> = new EventEmitter();

  private readonly API = `${environment.API}api/`

  private setSession(authResult){
    const token = authResult.access
    const payload = <JWTPayload>jwtDecode(token)
    const expiresAt = moment.unix(payload.exp)
    localStorage.setItem('token', authResult.access)
    localStorage.setItem('expire_at', JSON.stringify(expiresAt.valueOf()))

  }

  get token(){
    return localStorage.getItem('token');
  }

  

  login(usuario: Funcionario){
    // if(usuario.nome == "gustavo" && usuario.senha == "abc123"){
    //   this.estaLogado = true;
    //   this.mostrarMenu.emit(true)
    //   this.route.navigate(['/'])
    //   return true
    // }
    // else{
    //   this.estaLogado = false
    // }

    return this.http.post(this.API + 'login/', 
    {username: usuario.nome, password: usuario.senha}
    ).pipe(tap(response => this.setSession(response)), shareReplay())
  }

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('expires_at');
  }

  refreshToken(){
    if(moment().isBetween(this.getExpiracao().subtract(1,'days'), this.getExpiracao())){
      return this.http.post(
        this.API.concat('api/login/refresh/'), { token:this.token }
        ).pipe(tap(response => this.setSession(response)), shareReplay()).subscribe();
    }
  }

  getExpiracao(){
    const expiracao = localStorage.getItem('expire_at');
    const expiresAt = JSON.parse(expiracao)

    console.log(expiracao);
    console.log(expiresAt)

    return moment(expiresAt)
  }

  isLoggedIn(){
    if(moment().isBefore(this.getExpiracao())){
      this.mostrarMenu.emit(true)
      return true
    }

    else{
      this.mostrarMenu.emit(false)
      return false
    }
  }

  verificarLogin(){
    return this.estaLogado
  }
}

