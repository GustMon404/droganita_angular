import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor{

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    const token = localStorage.getItem('token')

    console.log(req)

    if(token){
      const cloned = req.clone(
        {
          headers: req.headers.set('Authorization','Bearer '.concat(token))
        });
        console.log(cloned)
      return next.handle(cloned)
    }

    return next.handle(req)
  }
}
