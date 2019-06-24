import { Component, OnInit } from '@angular/core';
import { MenusService } from '../../../services/menus.service';
import { Menu } from '../../../models/menu';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private service:MenusService) { }

  menus : Menu[];

  ngOnInit() {
    this.service.getAll().subscribe(
      (response: Menu[]) => {
        this.menus = response;
      }
    );
  }

}
