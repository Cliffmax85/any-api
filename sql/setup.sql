-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS poolplayers; 

CREATE TABLE poolplayers (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name TEXT NOT NULL,
    age INT NOT NULL,
    cue TEXT
);


INSERT INTO 
  poolplayers (name, age, cue)
VALUES
  ('Corey DEUEl', 46, 'Meucci'),
  ('Alex Blair', 36, 'Predator butt with a Mezz shaft'),
  ('Earl Strickland', 62, 'Some wierd tennis wrapped break cue');