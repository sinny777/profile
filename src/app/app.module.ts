import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DisqusModule } from "ngx-disqus";
import { ShareModule } from '@ngx-share/core';
import { MqttService } from './services/mqtt.service';
import { SharedService } from './services/shared.service';
import { CommonService } from './services/common.service';
import { SocialComponent } from './pages/social/social.component';

const appRoutes: Routes = [
  { path: '',      component: DashboardComponent },
  { path: 'professional', component: ProfileComponent },
  { path: 'social', component: SocialComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    DashboardComponent,
    SocialComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    DisqusModule.forRoot('gurvinder'),
    HttpClientModule,      // (Required) for share counts
    HttpClientJsonpModule, // (Optional) For linkedIn & Tumblr counts
    ShareModule.forRoot()
  ],
  providers: [MqttService, SharedService, CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
