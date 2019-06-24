import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../models/movie';
import { FirebaseListObservable } from 'angularfire2/firebase-node';

@Component({
  selector: 'app-single-movie',
  templateUrl: './single-movie.component.html',
  styleUrls: ['./single-movie.component.css']
})
export class SingleMovieComponent implements OnInit {

  id : number;
  movie : FirebaseListObservable<Movie>;

  constructor(private route: ActivatedRoute, private service: MoviesService) {
    
    console.log(this.id);
   }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.service.getAll().subscribe( (response) => {
      this.movie = response.filter(x => x.id == this.id)[0];
    })
  }

}
