import { Component, OnInit } from '@angular/core';
import { CommentsService } from '../../../services/comments.service';
import { ActivatedRoute } from '@angular/router';
import { Comments } from '../../../models/comments';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';

import { trigger, style, transition, animate, group }
    from '@angular/animations';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
  animations: [
    trigger('itemAnim1', [
      transition(':enter', [
        style({transform: 'translateX(-100%)', backgroundColor: '#FF8D1B'}),
        animate(350)
      ]),
      transition(':leave', [
        group([
          animate('0.2s ease', style({
            transform: 'translate(150px,25px)'
          })),
          animate('0.5s 0.2s ease', style({
            opacity: 0
          }))
        ])
      ])
    ])
  ]
})
export class CommentsComponent implements OnInit {
  
  comments;
  
  forma = new FormGroup({
    email : new FormControl('',[
      Validators.required,
      Validators.minLength(4)
    ]),
    name : new FormControl('',[Validators.required, Validators.pattern('/^[A-Z][a-z]{2,}$/')]),
    subject : new FormControl('',Validators.required),
    message : new FormControl('',Validators.required)
  });

  constructor(private route: ActivatedRoute, private service : CommentsService, private authService: AuthService) { }

  ngOnInit() {
    this.service.getAll().subscribe(
      (response: Comments[]) => {
        this.comments = response.filter( x => x.movieId == this.route.snapshot.params.id);
      }
    )
  }

  email(){
    return this.forma.get("email");
  }

  addComment(form){
    let values = form.value;
    values.movieId = this.route.snapshot.params.id;
    this.comments.splice(0,0,values);
    this.service.insert(values).subscribe(
      (response: Comments[]) => {
        
        // this.comments = response.filter( x => x.movieId == this.route.snapshot.params.id);
      }
    )
  }

  deleteComment(comment){
    this.service.delete(comment).subscribe(
      (response: Comments[]) => {
        // this.comments = response.filter( x => x.movieId == this.route.snapshot.params.id);
        let index = this.comments.indexOf(comment);
      }
    );
  }

}
