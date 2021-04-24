import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

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

    this._movieService.addMovie(this.id, this.name, this.releaseDate, this.actorsName).subscribe(data => {console.log("data"); console.log(data)});
  }
}
