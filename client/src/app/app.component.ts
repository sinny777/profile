import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from './services/common.service';
import { AuthService } from "angular2-social-login";
import { SharedService } from './services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  sub: any;
  currentUser: any;
  loginForm: FormGroup;
  post:any;
  contactPayload: any;

  showLogo = true;

  @ViewChild('closeBtn') closeBtn: ElementRef;

  constructor(public _auth: AuthService, public sharedService: SharedService, public commonService: CommonService, private fb: FormBuilder){
      this.currentUser = this.sharedService.getCurrentUser();
      this.loginForm = fb.group({
        'username' : [null, Validators.required],
        'password' : [null, Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(20)])],
        'validate' : ''
      });

      this.contactPayload = {
        "firstName": "",
        "lastName": "",
        "email": "",
        "message": ""
      };
   }

  signIn(provider){
    console.log("Sign In to: >>> ", provider);
    this.sub = this._auth.login(provider).subscribe(
      (data) => {
                  console.log(data);
                  this.currentUser = data;
                  this.sharedService.setCurrentUser(this.currentUser);
                  this.closeBtn.nativeElement.click();
                }
    );
  }

  gotoRegister(){
    console.log("IN gotoRegister: >>> ");
  }

  handleLogin(post){
    console.log("IN handleLogin: >>> ", JSON.stringify(post));
  }

  logout(){
    this._auth.logout().subscribe(
      (data)=>{
        this.currentUser = null;
      }
    );
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
