import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LessonComponent,
    QuizComponent
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
    ToastModule
    // RadioButtonModule
  ],
  providers: [ LessonService, QuizService, ConfirmationService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
