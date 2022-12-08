CREATE TABLE lessons(
    id SERIAL PRIMARY KEY ,
    title varchar(255),
    youtube_video_id varchar(255),
    foto_path varchar(255),
    content varchar
);


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