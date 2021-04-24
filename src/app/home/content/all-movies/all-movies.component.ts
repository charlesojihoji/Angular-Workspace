import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.css']
})
export class AllMoviesComponent implements OnInit {

  constructor(private _movieService: ApiService) { }

  movies = [];
  ngOnInit(): void {
     this._movieService.allMovies().subscribe(data => this.movies = data); 
  }


}
