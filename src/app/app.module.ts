import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// FIREBASE
import { AngularFireModule } from '@angular/fire'
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { PersonalInformationComponent } from './components/personal-information/personal-information.component';
import { TrainingComponent } from './components/training/training.component';
import { AchievementComponent } from './components/achievement/achievement.component';
import { ProfessionalExperienceComponent } from './components/professional-experience/professional-experience.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PersonalInformationComponent,
    TrainingComponent,
    AchievementComponent,
    ProfessionalExperienceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
