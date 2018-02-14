import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { Angular2SocialLoginModule } from "angular2-social-login";

import { AppComponent } from './app.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AgmCoreModule } from '@agm/core';
import { GoogleMapsAPIWrapper } from '@agm/core/services/google-maps-api-wrapper';
import { MarkerManager } from '@agm/core/services/managers/marker-manager';
import { DisqusModule } from "ngx-disqus";
import { ShareModule } from '@ngx-share/core';
import { MqttService } from './services/mqtt.service';
import { SharedService } from './services/shared.service';

let providers = {
    "google": {
      "clientId": "874807563899-9kk6gpacomg9t56pqfc4o8n4gn365ppg.apps.googleusercontent.com"
    },
    "linkedin": {
      "clientId": "81ann4egou3i6j"
    },
    "facebook": {
      "clientId": "330079704089458",
      "apiVersion": "v2.9" //like v2.4
    }
  };

const appRoutes: Routes = [
  { path: 'public/dashboard', component: DashboardComponent },
  { path: '',      component: ProfileComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    DashboardComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    Angular2SocialLoginModule,
    DisqusModule.forRoot('gurvinder'),
    HttpClientModule,      // (Required) for share counts
    HttpClientJsonpModule, // (Optional) For linkedIn & Tumblr counts
    ShareModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD3oMSe59cIpUnouvFcWT3oP3iPwsRp5zk'
    })
  ],
  providers: [GoogleMapsAPIWrapper, MarkerManager, MqttService, SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }

Angular2SocialLoginModule.loadProvidersScripts(providers);
