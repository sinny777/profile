import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ThemeComponent } from './pages/theme/theme.component';
import { ProfessionalComponent } from './pages/professional/professional.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SocialComponent } from './pages/social/social.component';
import { DisqusModule } from 'ngx-disqus';
// import { DISQUS_SHORTNAME } from 'ngx-disqus';
// import { ShareModule } from '@ngx-share/core';
import { ShareModule } from 'ngx-sharebuttons';
import { SharedService } from './services/shared.service';
import { CommonService } from './services/common.service';

const appRoutes: Routes = [
  { path: '',      component: DashboardComponent },
  { path: 'theme', component: ThemeComponent },
  { path: 'professional', component: ProfessionalComponent },
  { path: 'social', component: SocialComponent },
  { path: '**', redirectTo: '', pathMatch: 'full'}
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
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    DisqusModule.forRoot('gurvinder'),
    HttpClientModule,      // (Required) for share counts
    HttpClientJsonpModule, // (Optional) For linkedIn & Tumblr counts
    ShareModule,
    // ShareButtonModule
  ],
  providers: [
    // { provide: DISQUS_SHORTNAME, useValue: 'gurvinder' },
      SharedService,
      CommonService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
