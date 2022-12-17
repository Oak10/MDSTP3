package com.mds.demo.controllers;

import com.mds.demo.models.QuizEntity;
import com.mds.demo.models.QuizRepository;
import com.mds.demo.models.ReferenceEntity;
import com.mds.demo.models.ReferenceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequestMapping("refs")
@CrossOrigin
@RestController
public class ReferencesController {

    @Autowired
    ReferenceRepository referenceRepository;

    @GetMapping
    public ResponseEntity<List<ReferenceEntity>> getQuiz(){
        return ResponseEntity.ok(referenceRepository.findAll());
    }
}
