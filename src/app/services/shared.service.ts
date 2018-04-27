import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {

  private sessionData: any;
  private currentUser: any;

  public CONFIG = {
                    API_BASE_URL: "http://api.hukamtechnologies.com/api"                  
                  };

    constructor() {
        this.sessionData = {};
     }

     public setCurrentUser(user){
       console.log("IN setCurrentUser: >> ", user);
       this.currentUser = user;
     }

     public getCurrentUser(){
       return this.currentUser;
     }

}
