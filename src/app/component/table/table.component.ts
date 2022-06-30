import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {PageEvent} from '@angular/material/paginator';
import { PeopleService } from 'src/app/services/SW/people.service';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() columnNames: string[] = [];
  @Input() data: any[] = [];
  @Output() deleteButtonFunction: EventEmitter<any> = new EventEmitter<any>();
  @Output() updateButtonFunction: EventEmitter<any> = new EventEmitter<any>();
  @Output() rowClickFunction: EventEmitter<any>=new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    console.log(this.data)
    console.log(this.columnNames)
  }

  deleteButtonEvent(item: any) {
    this.deleteButtonFunction.emit(item)
  }

  updateButtonEvent(item: any) {
    this.updateButtonFunction.emit(item)
  }
  rowClickEvent(item:any){
    this.rowClickFunction.emit(item)
  }


}
