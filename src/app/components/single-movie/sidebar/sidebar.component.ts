import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../../services/movies.service';
import { filter } from 'rxjs/operators';
import { Movie } from '../../../models/movie';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  movies : Movie[] = [];
  constructor(private service : MoviesService) { }

  ngOnInit() {

    this.service.get().subscribe(
      response =>  {
        let currentYear = new Date().getFullYear();
        response.forEach((obj : Movie) => {
          if(obj.year == currentYear){
            this.movies.push(obj);
          }
        })
      }
    )
  }

}
