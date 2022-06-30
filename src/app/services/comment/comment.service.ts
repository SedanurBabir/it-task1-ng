import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from 'src/app/models/comment';


@Injectable({
  providedIn: 'root'
})
export class CommentService {
  apiUrl="https://jsonplaceholder.typicode.com/comments"
  constructor(private httpClient:HttpClient) { }
  getCommentsbyPostId(postId:number):Observable<Comment[]>{
  return  this.httpClient.get<Comment[]>(this.apiUrl+'?postId=' + postId)

  }
}
