import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './component/table/table.component';
import {HttpClientModule} from "@angular/common/http";
import {MatTableModule} from '@angular/material/table';
import { PeopleComponent } from './pages/people/people.component';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PeopleDetailsComponent } from './pages/people-details/people-details/people-details.component';
import {MatCardModule} from '@angular/material/card';
import { UserComponent } from './pages/user/user/user.component';
import { PostComponent } from './pages/post/post/post.component';
import { CommentComponent } from './pages/comment/comment/comment.component';






@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    PeopleComponent,
    PeopleDetailsComponent,
    UserComponent,
    PostComponent,
    CommentComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatCardModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
