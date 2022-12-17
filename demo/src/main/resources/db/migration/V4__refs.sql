CREATE TABLE refs(
    id SERIAL PRIMARY KEY ,
    author varchar(255),
    post_date varchar(255),
    access_date varchar(255),
    title varchar(255),
    link varchar(510)
);


INSERT INTO refs (author, post_date, access_date, title, link)
VALUES ('SpringBoot',
        '24-11-2022',
        '17-12-2022',
        'Spring Boot 3.0.0',
        'https://spring.io/projects/spring-boot'
);


INSERT INTO refs (author, post_date, title)
VALUES ('MDS',
        '12-1-1999',
        'MLOps - great book'
);