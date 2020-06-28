import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from '../../services/shared.service';
// import { ShareButtons } from '@ngx-share/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-professional',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.css']
})
export class ProfessionalComponent implements OnInit {

  currentUser: any;
  disqusConfig: any;
  badgesNCertificates: any;
  myWork: any;

  @Input('showLogo') showLogo: boolean;

  constructor(public sharedService: SharedService) {
    this.disqusConfig = {
                    'pageIdentifier': 'Professional',
                    'pageUrl': 'http://www.gurvinder.info/professional'
                  };
  }

  ngAfterViewInit() {
    this.scrollToTop('professional_header')
  }

  scrollToTop(elementId){
    let top = document.getElementById(elementId);
    if (top !== null) {
      top.scrollIntoView();
      top = null;
    }
  }

  fillPageContent(){
    this.badgesNCertificates = environment.badgesNCertificates;
    this.myWork = environment.myWork;
  }

  ngOnInit() {
    this.currentUser = this.sharedService.getCurrentUser();
    this.fillPageContent()
  }

}
