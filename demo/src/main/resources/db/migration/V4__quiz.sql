CREATE TABLE quiz(
    id SERIAL PRIMARY KEY ,
    question varchar(255),
    answer_u varchar(255),
    answer_d varchar(255),
    answer_t varchar(255),
    answer_q varchar(255),
    answer_c varchar(255),
    answer_s varchar(255),
    correct_answer varchar(255)
);


INSERT INTO quiz (question,answer_u, answer_d, answer_t, answer_q, answer_c, answer_s, correct_answer)
VALUES ('is it good?',
        'no',
        'yes',
        'bla',
        'blabla',
        'qwerty',
        'azerty',
        'yes'
);

INSERT INTO quiz (question,answer_u, answer_d, correct_answer)
VALUES ('is it good -2 ?',
        'no',
        'yes',
        'yes'
);

INSERT INTO quiz (question,answer_u, answer_d, answer_t, answer_q, correct_answer)
VALUES ('is it bad - 3 ?',
        'yes',
        'no',
        'ssss',
        'nnnnn',
        'no'
);
