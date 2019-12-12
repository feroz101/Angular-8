import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable,throwError  } from 'rxjs';
import { ApiResponse } from './api-response';
import { catchError } from 'rxjs/operators';    
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient,private router: Router) { }
  baseUrl = 'https://randomuser.me/api/'

  getUser(): Observable<any> {
    return this.http.get<any>(this.baseUrl).pipe(
      catchError((error)=>{
        console.error(error);
        return  throwError(error.error || 'Server Error');
      }
    ));
 }
}
