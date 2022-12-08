import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LessonComponent } from './components/lesson/lesson.component';
import { QuizComponent } from './components/quiz/quiz.component';

const routes: Routes = [
  { path: '', redirectTo: 'lesson', pathMatch: 'full'},
  { path: 'lesson', component: LessonComponent },
  { path: 'about', component: HomeComponent },
  { path: 'quiz', component: QuizComponent },
  { path: '**', component: LessonComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
