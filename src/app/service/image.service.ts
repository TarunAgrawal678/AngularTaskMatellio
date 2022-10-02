import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Image } from '../interface/Image';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  baseUrl:string=environment.baseUrl;
  constructor(private httpClient:HttpClient) { }

  getAllImages():Observable<Image[]>{
    return this.httpClient.get<Image[]>(this.baseUrl+'/photos').pipe(
      catchError(this.handleError)
    );
  }
  handleError(error:any) {
    let errorMessage='';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    const err = new Error(errorMessage); 
    return throwError(() => err);
  }
}
