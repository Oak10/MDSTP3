package com.mds.demo.controllers;

import com.mds.demo.models.ScoreEntity;
import com.mds.demo.models.ScoreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("scores")
@CrossOrigin
@RestController
public class ScoresController {
    @Autowired
    ScoreRepository scoreRepository;

    @GetMapping
    public ResponseEntity<List<ScoreEntity>> getScore(){
        return ResponseEntity.ok(scoreRepository.findAllByOrderByScoreDesc());
    }

    @GetMapping("/top")
    public ResponseEntity<List<ScoreEntity>> getScoreTop(){
        return ResponseEntity.ok(scoreRepository.findTop3ByOrderByScoreDesc());
    }

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ScoreEntity> createScore(@RequestBody ScoreEntity scoreEntity) {
        ScoreEntity scoreIfExist = scoreRepository.findOneByUserName(scoreEntity.getUserName());

        ScoreEntity response;
        if (scoreIfExist != null){
            scoreIfExist.setScore(scoreEntity.getScore());
            response = scoreRepository.save(scoreIfExist);
        }else {
            response = scoreRepository.save(scoreEntity);
        }

        return ResponseEntity.ok(response);
    }


}
