import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-update-movie',
  templateUrl: './update-movie.component.html',
  styleUrls: ['./update-movie.component.css']
})
export class UpdateMovieComponent implements OnInit {

  constructor(private _movieService: ApiService) { }

  ngOnInit(): void {
  }

  id: number = 0;
  name: String = "";
  releaseDate: String = "";
  actorsName: String = "";

  onSubmit(form: NgForm) {
    this.id = form.value.id;
    this.name = form.value.name;
    this.releaseDate = form.value.date;
    this.actorsName = form.value.actorsName;

    this._movieService.updateMovie(this.id, this.name, this.releaseDate, this.actorsName).subscribe(data => {alert("Movie updated successfully")});
  }

}
