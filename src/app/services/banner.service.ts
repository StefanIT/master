import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';
import { Banner } from '../models/banner';
import { AngularFireDatabase } from 'angularfire2/database';

import { FirebaseListObservable } from 'angularfire2/firebase-node';

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  
  constructor(private http:HttpClient) { }

  getAll() {
    return this.http.get(environment.base_url + "/assets/jsons/banners.json");
  }
}
