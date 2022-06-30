import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/Post/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts:Post[]=[];
  postColumns:string[]=[];
  searchText:any;

  @Input() userid:number;
  @Output() setCurrentPostIdEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor(private postService:PostService,
    private router:Router) { }

  ngOnInit(): void {
   this.getPostbyUserId()
  }

  getPostbyUserId(){
    this.postService.getPostbyUserId(this.userid).subscribe((response)=>{
      console.log(response)
      this.postColumns=[]
      this.posts=response;

      Object.keys(response[0]).forEach(key=>{
        this.postColumns.push(key)
      })
      console.log(this.posts)


    })


    }

    rowClick(post:any){
      this.setCurrentPostIdEvent.emit(post.id)
    }

  }

