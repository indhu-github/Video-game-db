import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment.prod';
import { APIResponse, Game } from '../models';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }

  getGameList(
    ordering:string,
    search?:string
  ): Observable<APIResponse<Game>>{
    let params = new HttpParams().set('ordering',ordering);

    if(search){
      params = params.set('search',search);
    }

    return this.http.get<APIResponse<Game>>(`${env.BASE_URL}/games`,{
      params:params,
    })
  }
}
// In order to provide parameters and headers to the URL in the application level, we use interceptors