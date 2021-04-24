import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterStateSnapshot } from '@angular/router';

import { Location } from '@angular/common';
import { AuthService } from './login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'farmacia';
  mostrarMenu: boolean; //mudar para false

  constructor(private authService: AuthService, private location: Location){
    
  }

  ngOnInit():void{
    this.authService.mostrarMenu.subscribe(
      menu => this.mostrarMenu = menu
    )
    
    console.log(this.location.path())
    
  }
}
