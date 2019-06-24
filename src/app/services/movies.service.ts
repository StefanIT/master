import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { Movie } from '../models/movie';
import { map, filter } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/firebase-node';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  
  movies: FirebaseListObservable<Movie>;
  constructor(private db: AngularFireDatabase) { }

  getAll(){
    // return this.http.get(environment.base_url + "/assets/jsons/movies.json",).pipe(map(
    //   (response : Movie[]) => {
    //     var data = response;
    //     data.forEach((obj) => {
    //       var podaciDatum = obj.created_at.toString().split("-");
    //       var newDate = new Date();
    //       newDate.setDate(parseInt(podaciDatum[2]));
    //       newDate.setMonth(parseInt(podaciDatum[1])-1);
    //       newDate.setFullYear(parseInt(podaciDatum[0]));
          
    //       obj.created_at = newDate;
    //     });
    //     return data;
    //   }
    // ));
    this.movies = this.db.list('/movies').valueChanges();
    return this.movies;
  }

  get(){
   return this.db.list('/movies').valueChanges();
  }
}
