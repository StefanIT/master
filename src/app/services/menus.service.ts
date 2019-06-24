import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/firebase-node';
import { Menu } from '../models/menu';

@Injectable({
  providedIn: 'root'
})
export class MenusService {

  menus: FirebaseListObservable<Menu>;

  constructor(private db:AngularFireDatabase) { }

  getAll(){
    this.menus = this.db.list('/menus').valueChanges();
    return this.menus;
  }
}
