import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/app/models/character';
import { PeopleService } from 'src/app/services/SW/people.service';


@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.component.html',
  styleUrls: ['./people-details.component.css']
})
export class PeopleDetailsComponent implements OnInit {
  people:Character;

  constructor(private peopleservice:PeopleService, private route:ActivatedRoute) {}


  ngOnInit(): void {
    this.route.params.subscribe((params)=>{
      if(params['id']){
        this.getPeoplebyId(params['id'])
      }}
      )
  }

  getPeoplebyId(id:number){
    this.peopleservice.getPeoplebyId(id).subscribe((response)=>{
      this.people=response;
      console.log(response)
    })
  }

}

