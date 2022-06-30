import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './component/table/table.component';
import { PeopleDetailsComponent } from './pages/people-details/people-details/people-details.component';
import { PeopleComponent } from './pages/people/people.component';
import { PostComponent } from './pages/post/post/post.component';
import { UserComponent } from './pages/user/user/user.component';
import { PeopleService } from './services/SW/people.service';



const routes: Routes = [
  {path:'peoples',component:PeopleComponent},
  {path:'peopledetails/:id',component:PeopleDetailsComponent},
  {path:'user',component:UserComponent},
  {path:'post',component:PostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
