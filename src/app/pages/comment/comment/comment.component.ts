import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Comment } from 'src/app/models/comment';
import { CommentService } from 'src/app/services/comment/comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() postId:number
  commentColumns:string[]=[];
  comments:Comment[]
  constructor(private commentService:CommentService) { }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void{
    if(this.postId){
      this.getCommentsbyPostId()
    }
  }

  getCommentsbyPostId(){
    this.commentService.getCommentsbyPostId(this.postId).subscribe(response=>{
      this.commentColumns = []
      console.log(response)
      this.comments=response;
      Object.keys(this.comments[0]).forEach(e => {
        this.commentColumns.push(e)
      })
    })
  }

}
