import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from 'src/app/models/character';
import { ResponseListModel } from 'src/app/models/responseListModel';


@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  apiUrl="https://swapi.dev/api/";

  constructor(private httpClient:HttpClient) { }

  getPeoplesbyPage(page:number): Observable<ResponseListModel<Character>>{
    return this.httpClient.get<ResponseListModel<Character>>(this.apiUrl+'people/?page='+page)
  }

  getPeoplebyId(id:number):Observable<Character>{
    return this.httpClient.get<Character>(this.apiUrl+'people/'+id)
  }
}
