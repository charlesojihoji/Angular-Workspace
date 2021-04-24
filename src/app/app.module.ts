import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { ContentComponent } from './home/content/content.component';
import { FormComponent } from './home/form/form.component';
import { AddMovieComponent } from './home/form/add-movie/add-movie.component';
import { AllMoviesComponent } from './home/content/all-movies/all-movies.component';
import { UpdateMovieComponent } from './home/form/update-movie/update-movie.component';
import { DeleteMovieComponent } from './home/form/delete-movie/delete-movie.component';

const routers:Routes=[
  {path: "", component:AllMoviesComponent},
  {path: "showAllMovies", component:AllMoviesComponent},
  {path: "addMovie", component:AddMovieComponent},
  {path: "updateMovie", component:UpdateMovieComponent},
  {path: "deleteMovie", component:DeleteMovieComponent},
]

@NgModule({
  declarations: [
    AddMovieComponent,
    AppComponent,
    UpdateMovieComponent,
    DeleteMovieComponent,
    HomeComponent,
    HeaderComponent,
    ContentComponent,
    FormComponent,
    AllMoviesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routers),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
