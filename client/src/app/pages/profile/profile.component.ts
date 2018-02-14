import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentUser: any;

  pageIdentifier: "GurvinderProfile";
  pageUrl: "https://all-about-gurvinder.mybluemix.net";

  constructor(public sharedService: SharedService) {

  }

  ngOnInit() {
    this.currentUser = this.sharedService.getCurrentUser();
  }

}
