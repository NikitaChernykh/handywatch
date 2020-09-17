import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HwButtonComponent } from './components/hw-button/hw-button.component';
import { HeroSectionComponent } from './landing-page/hero-section/hero-section.component';
import { HwSwiperComponent } from './components/hw-swiper/hw-swiper.component';
import { HwContainerComponent } from './components/hw-container/hw-container.component';
import { QualitySectionComponent } from './landing-page/quality-section/quality-section.component';
import { QuestionsSectionComponent } from './landing-page/questions-section/questions-section.component';
import { HwLinkComponent } from './components/hw-link/hw-link.component';

@NgModule({
   declarations: [
      AppComponent,
      HwContainerComponent,
      HwButtonComponent,
      HwSwiperComponent,
      HwLinkComponent,
      HeroSectionComponent,
      QualitySectionComponent,
      QuestionsSectionComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
