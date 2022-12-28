import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LessonComponent } from './components/lesson/lesson.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { RefsComponent } from './components/refs/refs.component';
import { ScoreboardComponent } from './components/scoreboard/scoreboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'lesson', component: LessonComponent },
  { path: 'refs', component: RefsComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'home', component: HomeComponent },
  { path: 'score', component: ScoreboardComponent },
  { path: '**', component: LessonComponent }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
