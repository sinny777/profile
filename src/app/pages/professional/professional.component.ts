import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { ShareButtons } from '@ngx-share/core';

@Component({
  selector: 'app-professional',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.css']
})
export class ProfessionalComponent implements OnInit {

  currentUser: any;
  disqusConfig: any;

  @Input('showLogo') showLogo: boolean;

  constructor(public sharedService: SharedService, public share: ShareButtons) {
    this.disqusConfig = {
                    "pageIdentifier": "Professional",
                    "pageUrl": "http://www.gurvinder.info/professional"
                  };
  }

  ngOnInit() {
    this.currentUser = this.sharedService.getCurrentUser();
  }

}
