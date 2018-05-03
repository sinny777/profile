import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ThemeComponent } from './pages/theme/theme.component';
import { ProfessionalComponent } from './pages/professional/professional.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SocialComponent } from './pages/social/social.component';
import { DisqusModule } from "ngx-disqus";
import { ShareModule } from '@ngx-share/core';
import { SharedService } from './services/shared.service';
import { CommonService } from './services/common.service';

const appRoutes: Routes = [
  { path: '',      component: DashboardComponent },
  { path: 'theme', component: ThemeComponent },
  { path: 'professional', component: ProfessionalComponent },
  { path: 'social', component: SocialComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ThemeComponent,
    ProfessionalComponent,
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
  providers: [SharedService, CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
