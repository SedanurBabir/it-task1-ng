import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  apiUrl="https://jsonplaceholder.typicode.com/"

  constructor(private httpClient:HttpClient) { }
  getPostbyUserId(id:number):Observable<Post[]>{
    return this.httpClient.get<Post[]>(this.apiUrl+'posts?userId='+id)
  }


}
