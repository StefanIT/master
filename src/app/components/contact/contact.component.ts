import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


import 'web-animations-js';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/firebase-node';
import { Comments } from '../../models/comments';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private db:AngularFireDatabase) { }

  contacts: FirebaseListObservable<Comments>;

  ngOnInit() {

}
  private commentCounter = 0;

  getValues(contactForm:NgForm){
    alert("Uspesno ste nas kontaktirali!");
    contactForm.resetForm;
  }

}
