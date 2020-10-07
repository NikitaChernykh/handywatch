import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrivacyComponent } from './privacy-page/privacy/privacy.component';
import { LandingComponent } from './landing-page/landing.component';


const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'bundles', component: LandingComponent },
  { path: 'fitbitsettings', component: LandingComponent },
  { path: 'privacy', component: PrivacyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
