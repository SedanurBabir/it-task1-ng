import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { Character } from 'src/app/models/character';
import { ResponseListModel } from 'src/app/models/responseListModel';
import { PeopleService } from 'src/app/services/SW/people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  initialPeoples:Character[]=[];
  peoplesResponse:ResponseListModel<Character>;
  peoples:Character[]=[];
  peopleColumns:string[]=[];
  searchText:any;
  pageEvent:PageEvent;


  constructor(private router:Router, private peopleservice:PeopleService) { }

  ngOnInit(): void {
    this.getPeoplesbyPage(1);
  }

  getPeoplesbyPage(page:number){
    this.peopleservice.getPeoplesbyPage(page).subscribe((response) =>{
      console.log(response)
      this.peopleColumns=[];
      this.peoplesResponse=response;
      this.initialPeoples=response.results;
      this.peoples=response.results;
      this.peopleColumns.push("delete");
      this.peopleColumns.push("update");
      Object.keys(response.results[0]).forEach(key=>{
        this.peopleColumns.push(key)
      })


    })
  }
  deletePeople(people:Character){
    console.log(people)
    this.peoples=this.peoples.filter(x=>x.url !==people.url)
  }

  updatePeople(people:Character){

  }

  rowClick(user:any){
    console.log(user)
    let userSplited=user.url.split('/')
    let userId = userSplited[userSplited.length-2]
    this.router.navigate(['/peopledetails/'+userId])
  }

  pageChanged(pageEvent: any){
    console.log(pageEvent)
    this.getPeoplesbyPage(pageEvent.pageIndex)
  }

  search(){
    if(this.searchText == null || this.searchText == ""){
      this.peoples = this.initialPeoples
    }
    this.peoples = this.peoples.filter(x => {
         return x.name.toLowerCase().includes(this.searchText.toLowerCase());
    })
    console.log(this.peoples)
  }
}



