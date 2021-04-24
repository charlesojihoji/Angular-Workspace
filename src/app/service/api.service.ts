import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {

  }

  allMovies(): Observable<any>{
    return this.http.get("http://localhost:8080/movies");
  }

  addMovie(id: number, name: String, releaseDate: String, actorsName: String):Observable<any>{
    let Obj = {"movieId": id, "movieName": name, "releaseDate": releaseDate, "actorsName": actorsName}

    let httpHeaders = new HttpHeaders({'Content-Type' : 'application/json'});

    let options = {headers: httpHeaders};

    return this.http.post("http://localhost:8080/movies", Obj, options);
  }

  updateMovie(id: number, name: String, releaseDate: String, actorsName: String):Observable<any>{
    let Obj = {"movieId": id, "movieName": name, "releaseDate": releaseDate, "actorsName": actorsName}

    let httpHeaders = new HttpHeaders({'Content-Type' : 'application/json'});

    let options = {headers: httpHeaders};

    return this.http.put("http://localhost:8080/movies", Obj, options);
  }


  deleteMovie(id: number):Observable<any>{

    let httpHeaders = new HttpHeaders({'Content-Type' : 'application/json'});

    let options = {headers: httpHeaders};

    return this.http.delete("http://localhost:8080/movies/" + id);
  }


}
