package com.mds.demo.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@Entity(name="lessons")
public class LessonEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "id", nullable = false)
    @JsonIgnore
    private Long id;

    @Column(name="title", length=255, nullable=true, unique=true)
    private String title;

    @Column(name="youtube_video_id", length=255, nullable=true)
    private String youtubeVideoId;

    @Column(name="foto_path", length=255, nullable=true)
    private String fotoPath;

    @Column(name="content", length=100, nullable=true)
    private String content;

}

