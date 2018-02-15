import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { CommonService } from '../../services/common.service';
import { ShareButtons } from '@ngx-share/core';

@Component({
  selector: 'app-home',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentUser: any;

  disqusConfig: any;

  contactPayload: any;

  constructor(public sharedService: SharedService, public commonService: CommonService, public share: ShareButtons) {
    this.disqusConfig = {
                    "pageIdentifier": "GurvinderProfile",
                    "pageUrl": "https://all-about-gurvinder.mybluemix.net"
                  };
    this.contactPayload = {
      "firstName": "",
      "lastName": "",
      "email": "",
      "message": ""
    };

  }

  ngOnInit() {
    this.currentUser = this.sharedService.getCurrentUser();
  }

  sendEmail(){
    var message = "FirstName: "+this.contactPayload.firstName+"\n";
        message += "LastName: "+this.contactPayload.lastName+"\n";
        message += "Email: "+this.contactPayload.email+"\n";
        message += "Message: "+this.contactPayload.message+"\n\n";
        message += "Thanks..\n\n ";
    var mailOptions = {
      from: 'sinny777@gmail.com',
      to: 'sinny777@gmail.com',
      subject: 'CONTACT ME ON Gurvinder Profile...',
      text: message
    };
    console.log("IN sendMail: >>> ", mailOptions);
    this.commonService.sendEmail(mailOptions).then( result => {
      console.log("Email sent Successfully:  ", result);
    },
    error => {
        console.log("ERROR in sendEmail: >> ", error);
    });
  }

}
