import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Funcionario } from '../funcionario';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';
import jwtDecode from 'jwt-decode';
import * as moment from 'moment';

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
    // const payload = <JWTPayload>jwtDecode(token)
    // const expiresAt = moment.unix(payload.exp)
    // console.log(moment())
    // localStorage.setItem('token', authResult)
    // localStorage.setItem('expire_at', JSON.stringify(expiresAt.valueOf()))

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
    ).pipe(tap(response => this.setSession(response)))
  }

  refreshToken(){
    if(moment().isBetween(this.getExpiracao().subtract(1,'days'), this.getExpiracao())){
      return this.http.post(this.API.concat('api/login/refresh/'), { token:this.token }).pipe(tap(response => this.setSession(response)))
    }
  }

  getExpiracao(){
    const expiracao = localStorage.getItem('epires_at');
    const expiresAt = JSON.parse(expiracao)

    return moment(expiresAt)
  }

  verificarLogin(){
    return this.estaLogado
  }
}

