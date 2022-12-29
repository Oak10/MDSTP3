import { Component, OnInit } from '@angular/core';
import { Lesson } from 'src/app/common/lesson';
import { LessonService } from 'src/app/services/lesson.service';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent implements OnInit {
  lessons: Lesson[] = [];

  videoId = 'ZVWg18AXXuE';
  apiLoaded = false;

  constructor(private lessonService: LessonService) { }

  ngOnInit(): void {
    this.listLessons();
    // https://www.angularjswiki.com/angular/how-to-embed-youtube-videos-in-angular-apps/#step-1-install-angular-youtube-player-component-package
    if (!this.apiLoaded) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }
  }

  listLessons() {
    this.lessonService.getLessonsList().subscribe(
      data => {
        this.lessons = data;
      });
  }

}
