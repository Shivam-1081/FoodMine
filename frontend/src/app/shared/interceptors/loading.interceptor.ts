// import { LoadingInterceptor } from './loading.interceptor';

// import { HttpInterceptorFn,HttpRequest,HttpHandler,HttpEvent } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';



// export  class LoadingInterceptor implements HttpInterceptorFn{
//   constructor(){

//   }
//   intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
//    alert("Iam a intercepted request");
//     return next.handle(request);
// }
// }
// export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
//   return next(req);
// };




import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpEventType
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { LoadingService } from '../../services/loading.service';
var pendingRequests = 0;
@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  constructor(private loadingService: LoadingService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loadingService.showLoading();
    pendingRequests = pendingRequests + 1;

    return next.handle(request).pipe(
      tap({
        next:(event) => {
          if(event.type === HttpEventType.Response){
            this.handleHideLoading();
          }
        },
        error: (_) => {
          this.handleHideLoading();
        }
      })
    );
  }

  handleHideLoading(){
    pendingRequests = pendingRequests - 1;
    if(pendingRequests === 0)
    this.loadingService.hideLoading();
  }
}