import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Comments } from '../models/comments';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private db:AngularFireDatabase) { }

  getAll(){
    return this.db.list('/comments').valueChanges();
  }

  insert(comment : Comments){
    comment.id = this.db.createPushId();
    this.db.list('/comments').push(comment);
    return this.getAll();
  }

  delete(comment : Comments){
    this.db.list('/comments/'+comment.id).remove();
    return this.db.list('/comments').valueChanges();
  }
}
