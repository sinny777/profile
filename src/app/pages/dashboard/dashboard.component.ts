import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';
// import { CommonService } from '../../services/common.service';
// import { ShareButtons } from '@ngx-share/core';

@Component({
  selector: 'app-home',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  currentUser: any;
  disqusConfig: any;

  constructor(public sharedService: SharedService) {
    this.disqusConfig = {
                    'pageIdentifier': 'Dashboard',
                    'pageUrl': 'http://www.gurvinder.info'
                  };
  }

  ngOnInit() {
    this.currentUser = this.sharedService.getCurrentUser();
  }

}
