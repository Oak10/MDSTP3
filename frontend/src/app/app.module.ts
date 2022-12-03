import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LessonComponent } from './components/lesson/lesson.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { LessonService } from './services/lesson.service';
import { QuizService } from './services/quiz.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LessonComponent,
    QuizComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [ LessonService, QuizService],
  bootstrap: [AppComponent]
})
export class AppModule { }
