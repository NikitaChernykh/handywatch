import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HwButtonComponent } from './components/hw-button/hw-button.component';
import { HeroSectionComponent } from './landing-page/hero-section/hero-section.component';
import { HwSwiperComponent } from './components/hw-swiper/hw-swiper.component';
import { HwContainerComponent } from './components/hw-container/hw-container.component';
import { QualitySectionComponent } from './landing-page/quality-section/quality-section.component';
import { QuestionsSectionComponent } from './landing-page/questions-section/questions-section.component';
import { SubscribeSectionComponent } from './landing-page/subscribe-section/subscribe-section/subscribe-section.component';

import { HwLinkComponent } from './components/hw-link/hw-link.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterSectionComponent } from './landing-page/footer/footer-section/footer-section.component';
import { PrivacyComponent } from './privacy-page/privacy/privacy.component';
import { LandingComponent } from './landing-page/landing.component';
import { HwNavigationComponent } from './components/hw-navigation/hw-navigation/hw-navigation.component';


@NgModule({
   declarations: [
      AppComponent,
      HwContainerComponent,
      HwButtonComponent,
      HwSwiperComponent,
      HwLinkComponent,
      HwNavigationComponent,
      HeroSectionComponent,
      QualitySectionComponent,
      QuestionsSectionComponent,
      SubscribeSectionComponent,
      FooterSectionComponent,
      PrivacyComponent,
      LandingComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      ReactiveFormsModule,
      HttpClientModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
