package com.mds.demo.models;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@Entity(name="scores")
public class ScoreEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "id", nullable = false)
    @JsonIgnore
    private Long id;

    @Column(name="user_name", length=255)
    private String userName;

    @Column(name="score", nullable=false)
    private Integer score;

}

