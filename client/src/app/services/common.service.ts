import { Injectable } from '@angular/core';
// import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';

@Injectable()
export class CommonService {

  private headers: HttpHeaders;
  private reqOptions: any;

  private refreshHeaders(){
    this.headers = new HttpHeaders();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
    this.headers.append("X-IBM-Client-Id", "default");
    this.headers.append("X-IBM-Client-Secret", "SECRET");
  }

  constructor(private http: HttpClient) {
      this.refreshHeaders();
   }

   sendEmail(payload): Promise<any>{
     console.log("IN commonService.sendEmail: >>> ", payload);
     let POST_URL: string = environment.API_BASE_URL + "/CommonTask/sendemail";
     if(!payload || !payload.from || !payload.to){
         return Promise.reject("INVALID DATA FOR SENDING EMAIL !");
     }else{
         this.reqOptions = {headers: this.headers};
         return this.http.post(POST_URL, payload, this.reqOptions)
         .toPromise()
         .then(this.extractData)
               .catch(this.handleErrorPromise);
     }
   }

   private extractData(res) {
         let body = res.json();
         return body;
   }

   private handleErrorPromise (error: Response | any) {
 	     console.error(error.message || error);
        return Promise.reject(error.message || error);
   }

}
