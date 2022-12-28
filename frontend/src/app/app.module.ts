import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LessonComponent } from './components/lesson/lesson.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { LessonService } from './services/lesson.service';
import { QuizService } from './services/quiz.service';

import { FormsModule } from '@angular/forms'; 


import {PanelModule} from 'primeng/panel';
import {AccordionModule} from 'primeng/accordion';
import {MenubarModule} from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {ListboxModule} from 'primeng/listbox';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import {ToastModule} from 'primeng/toast';
import {MessageService} from 'primeng/api';
import {DialogModule} from 'primeng/dialog';
import {ImageModule} from 'primeng/image';
import {TableModule} from 'primeng/table'

import { YouTubePlayerModule } from '@angular/youtube-player';
import { RefsComponent } from './components/refs/refs.component'
import { RefsService } from './services/refs.service';
import { ScoreService } from './services/score.service';
import { HomeComponent } from './components/home/home.component';
import { ScoreboardComponent } from './components/scoreboard/scoreboard.component';


@NgModule({
  declarations: [
    AppComponent,
    LessonComponent,
    QuizComponent,
    RefsComponent,
    HomeComponent,
    ScoreboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    PanelModule,
    AccordionModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    ProgressSpinnerModule,
    ListboxModule,
    ConfirmDialogModule,
    ToastModule,
    //Modal,
    DialogModule,
    YouTubePlayerModule,
    ImageModule,
    TableModule
    

    // RadioButtonModule
  ],
  providers: [ LessonService, QuizService, RefsService , ScoreService, ConfirmationService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
