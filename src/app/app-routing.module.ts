import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { PrivacyComponent } from './privacy-page/privacy/privacy.component';
import { LandingComponent } from './landing-page/landing.component';


const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'bundles', component: LandingComponent },
  { path: 'fitbitsettings', component: LandingComponent },
  { path: 'privacy', component: PrivacyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      preloadingStrategy: PreloadAllModules
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
