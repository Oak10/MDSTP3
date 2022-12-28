package com.mds.demo.models;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@Entity(name="refs")
public class ReferenceEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "id", nullable = false)
    @JsonIgnore
    private Long id;

    @Column(name="author", length=255, nullable=false)
    private String author;

    @Column(name="post_date", length=255, nullable=true)
    private String postDate;

    @Column(name="access_date", length=255, nullable=true)
    private String accessDate;

    @Column(name="title", length=255, nullable=false)
    private String title;

    @Column(name="link", length=510, nullable=true)
    private String link;


}
