import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { PersonalInformationComponent } from './components/personal-information/personal-information.component';
import { TrainingComponent } from './components/training/training.component';
import { AchievementComponent } from './components/achievement/achievement.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PersonalInformationComponent,
    TrainingComponent,
    AchievementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
