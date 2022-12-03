package com.mds.demo.controllers;

import com.mds.demo.models.LessonEntity;
import com.mds.demo.models.LessonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("lessons")
@CrossOrigin
@RestController
public class LessonsController {

    @Autowired
    LessonRepository lessonRepository;

    @GetMapping
    //    http://localhost:8080/api/lessons
    public ResponseEntity<List<LessonEntity>> getLessons(){
        return ResponseEntity.ok(lessonRepository.findAll());
    }

    @GetMapping("/{title}")
    //    http://localhost:8080/api/lessons
    public ResponseEntity<LessonEntity> getLesson( @PathVariable String title){
        LessonEntity lesson = lessonRepository.findFirstByTitle(title);
        if (lesson == null)
            return ResponseEntity.notFound().build();
        return ResponseEntity.ok(lesson);
    }

    /*@PostMapping
    public ResponseEntity<LessonEntity> newLesson(@RequestBody LessonEntity lesson){
        return ResponseEntity.ok(lessonRepository.save(lesson));
    }*/


}
