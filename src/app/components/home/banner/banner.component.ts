import { Component, OnInit } from '@angular/core';
import { Banner } from '../../../models/banner';
import { BannerService } from '../../../services/banner.service';
import { FirebaseListObservable } from 'angularfire2/firebase-node';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  banners : Banner[];

  constructor(private service: BannerService) { 
  }

  ngOnInit() {
    console.log("dadada");
    this.service.getAll().subscribe(
      (data : Banner[]) => {
        
        this.banners = data;
        console.log(this.banners);
      },
      error => {
        console.log(error);
      }
    );
  }

}
