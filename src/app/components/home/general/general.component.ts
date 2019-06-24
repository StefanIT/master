import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../../../models/movie';
import { MoviesService } from '../../../services/movies.service';
import { SortHelper } from '../../../helpers/sort-helper';


@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {
  movies : Movie[];
  poruka;

  constructor(protected service: MoviesService) {
  //  this.poruka = "DAA";
  
   }

  ngOnInit() {
    this.service.getAll().subscribe(
      (response: Movie[]) => {
        this.movies = response;
      }
    );
  }

  filter(criteria? : string, order? : string){
    this.movies = SortHelper.sortArray(this.movies, criteria, order);
  }


}
