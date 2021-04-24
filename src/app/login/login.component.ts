import { Component, OnInit } from '@angular/core';
import { Funcionario } from '../funcionario';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  usuario: Funcionario = new Funcionario()

  fazerLogin(){
    this.authService.login(this.usuario).subscribe()
  }

}
