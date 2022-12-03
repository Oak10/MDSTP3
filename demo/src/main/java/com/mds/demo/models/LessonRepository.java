package com.mds.demo.models;

import org.springframework.data.jpa.repository.JpaRepository;


public interface LessonRepository extends JpaRepository<LessonEntity, Long> {
    LessonEntity findFirstByTitle(String title);

}
