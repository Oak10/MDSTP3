import { Component, OnInit } from '@angular/core';
import { Lesson } from 'src/app/common/lesson';
import { LessonService } from 'src/app/services/lesson.service';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent implements OnInit{
  lessons: Lesson[] = [];


  constructor (private lessonService: LessonService){}

  ngOnInit(): void {
    this.listLessons();
  }

  listLessons(){
    this.lessonService.getLessonsList().subscribe(
      data => {
        this.lessons = data;
        console.log(data);
      });
  }
}
