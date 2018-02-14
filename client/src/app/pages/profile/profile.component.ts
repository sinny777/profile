import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { ShareButtons } from '@ngx-share/core';

@Component({
  selector: 'app-home',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentUser: any;

  disqusConfig: any;

  constructor(public sharedService: SharedService, public share: ShareButtons) {
    this.disqusConfig = {
                    "pageIdentifier": "GurvinderProfile",
                    "pageUrl": "https://all-about-gurvinder.mybluemix.net"
                  };
  }

  ngOnInit() {
    this.currentUser = this.sharedService.getCurrentUser();
  }

}
