package com.mds.demo.models;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ScoreRepository extends JpaRepository<ScoreEntity, Long> {
    ScoreEntity findOneByUserName(String name);
    public List<ScoreEntity> findAllByOrderByScoreDesc();
    public List<ScoreEntity> findAllByOrderByScoreAsc();


}
