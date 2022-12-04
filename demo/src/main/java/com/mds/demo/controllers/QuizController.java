package com.mds.demo.controllers;


import com.mds.demo.models.QuizEntity;
import com.mds.demo.models.QuizRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequestMapping("quiz")
@CrossOrigin
@RestController
public class QuizController {

    @Autowired
    QuizRepository quizRepository;

    @GetMapping
    public ResponseEntity<List<QuizEntity>> getQuiz(){
        return ResponseEntity.ok(quizRepository.findAll());
    }

}
