import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

import {  throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Film } from './models/film';


@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private SERVER_URL = "http://localhost:8080";

  constructor(private httpClient: HttpClient) { }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  public sendGetRequest(){
    return this.httpClient.get(this.SERVER_URL).pipe(catchError(this.handleError));
  }

  public login(value: any) {
    return this.httpClient.post(this.SERVER_URL + '/utilisateur/api/login', value).pipe(catchError((error) => { return throwError(error) }));
  }

  public register(value: any) {
    return this.httpClient.post(this.SERVER_URL + '/utilisateur/api/', value).pipe(catchError((error) => { return throwError(error) }));
  }

  public getUser(id) {
    return this.httpClient.get(this.SERVER_URL + '/utilisateur/' + id);
  }

  public getAllFilms(){
    return this.httpClient.get<Film[]>(this.SERVER_URL + '/objects/film/').pipe(_film => { return _film});
  }

  public getFilmById(id) {
    return this.httpClient.get(this.SERVER_URL + '/objects/film/' + id);
  }
}
