package com.mds.demo.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@NoArgsConstructor
@Entity(name="quiz")
public class QuizEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "id", nullable = false)
    @JsonIgnore
    private Long id;

    @Column(name="question", nullable=false, unique=true)
    private String question;

    @Column(name="answer_u", length=255, nullable=true)
    private String answerU;

    @Column(name="answer_d", length=255, nullable=true)
    private String answerD;

    @Column(name="answer_t", length=255, nullable=true)
    private String answerT;

    @Column(name="answer_q", length=255, nullable=true)
    private String answerQ;

    @Column(name="answer_c", length=255, nullable=true)
    private String answerC;

    @Column(name="answer_s", length=255, nullable=true)
    private String answerS;

    @Column(name="correct_answer", length=255, nullable=true)
    private String correctAnswer;

}

