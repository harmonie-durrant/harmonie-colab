CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username varchar(32),
    passwordhash varchar(255)
);