import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-delete-movie',
  templateUrl: './delete-movie.component.html',
  styleUrls: ['./delete-movie.component.css']
})
export class DeleteMovieComponent implements OnInit {

  constructor(private _movieService: ApiService) { }

  ngOnInit(): void {
  }

  id: number = 0;

  onSubmit(form: NgForm) {
    this.id = form.value.id;

    this._movieService.deleteMovie(this.id).subscribe(data => {alert("Movie deleted successfully")});
  }
}
