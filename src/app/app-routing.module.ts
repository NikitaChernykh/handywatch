import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrivacyComponent } from './privacy-page/privacy/privacy.component';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing-page/landing.component';


const routes: Routes = [
  { path: 'privacy', component: PrivacyComponent },
  { path: '', component: LandingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
