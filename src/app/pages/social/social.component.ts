import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { ShareButtons } from '@ngx-share/core';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {

  currentUser: any;
  disqusConfig: any;

  @Input('showLogo') showLogo: boolean;

  constructor(public sharedService: SharedService, public share: ShareButtons) {
    this.disqusConfig = {
                    "pageIdentifier": "Social",
                    "pageUrl": "http://www.gurvinder.info/social"
                  };
  }

  ngOnInit() {
    this.currentUser = this.sharedService.getCurrentUser();
  }

}
