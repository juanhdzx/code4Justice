USE mysqlchallenge;

-- VERY EASY 

CREATE TABLE fav_cars (
	id INT NOT NULL AUTO_INCREMENT,
    Year INT, 
    Make VARCHAR(100), 
    Model VARCHAR(100), 
    Trim VARCHAR(100), 
    PRIMARY KEY(id)
);
-- create a query to add in two more cars 
INSERT INTO fav_cars
	(Year, Make, Model, Trim)
VALUES 
	(2015, 'Subaru', 'WRX', 'STI'),
    (2020, 'Toyota', 'Supra', 'GR'),
    (2008, 'BMW', 'M3', 'Sedan')
    ;
 
 -- Easy Challenge
 -- Create a table with your top five favorite books with Title, Publish Date, Author - First/Last name 
CREATE TABLE books (
	id INT NOT NULL AUTO_INCREMENT, 
    Title VARCHAR(100), 
    Publish_date DATE,
    Author_First VARCHAR(80),
    Author_Last VARCHAR(80), 
    PRIMARY KEY(id)
);
-- Create a query to add in two new books Remove the oldest book, Provide an additional query giving the sum of all books. 
INSERT INTO books
	(Title, Publish_date, Author_First, Author_Last)
    VALUES 
    ('The Silmarillion', '1977-09-15', 'John', 'Tolkien'),
    ('Pride and Prejudice', '1813-01-28', 'Jane', 'Austen'),
    ('Harry Potter and the Sorcerers Stone', '1997-06-26', 'Joanne', 'Rowling')
    ;
    
-- Medium Challenge

CREATE TABLE movies (
	id INT AUTO_INCREMENT NOT NULL, 
    Title VARCHAR(80),
    Release_date DATE,
    Rating FLOAT, 
    PRIMARY KEY (id)
); 
INSERT INTO movies 
	(Title, Release_date, Rating)
VALUES
	('Interstellar', '2015-03-31', '8.6'),
    ('FURY', '2014-10-15', '7.5'),
    ('Spider-Man', '2007-10-30', '7.2'),
    ('Goodfellas', '1977-08-22', '8.0'),
    ('The Godfather', '1972-05-30', '9.2'),
    ('The Shawshank Redemption', '1994-10-30', '9.4'),
    ('The Dark Knight', '2008-07-30', '9.0'),
    ('Pulp Fiction', '1994-04-27', '8.9'),
    ('The Gladiator', '2000-09-26', '8.9'),
    ('The Green Mile', '1999-12-06', '8.6')
    ;
    -- create a query that pulls all movies, in order of release date, where the title includes the letters "s". 
    SELECT * FROM movies
    WHERE Title LIKE ("%s%")
    ORDER BY Rating ASC;
    
    -- Hard Challenge 
    -- Make a copy of medium challenge
    
    CREATE TABLE moviesV2 (
		id INT AUTO_INCREMENT NOT NULL, 
        Title VARCHAR(80),
        Release_date DATE,
        Rating FLOAT,
        PRIMARY KEY (id)
    );
    
    ALTER TABLE moviesV2
    ADD Director_first VARCHAR(80),
    ADD Director_last VARCHAR(80);
    
    INSERT INTO moviesV2
	(Title, Release_date, Rating, Director_first, Director_last)
VALUES
	('Interstellar', '2015-03-31', '8.6'),
    ('FURY', '2014-10-15', '7.5'),
    ('Spider-Man', '2007-10-30', '7.2'),
    ('Goodfellas', '1977-08-22', '8.0'),
    ('The Godfather', '1972-05-30', '9.2'),
    ('The Shawshank Redemption', '1994-10-30', '9.4'),
    ('The Dark Knight', '2008-07-30', '9.0'),
    ('Pulp Fiction', '1994-04-27', '8.9'),
    ('The Gladiator', '2000-09-26', '8.9'),
    ('The Green Mile', '1999-12-06', '8.6')
    ;
    
    -- write out queries that would add the directors first name and last name into two separate columns. 
    -- query that puts names together 
    SELECT CONCAT(Director_first, ' ', Director_last) AS "Full Name", Title, Release_date, Rating FROM moviesV2;
    -- query to put the list in alphabetical order by last name from A-Z
    SELECT * FROM moviesV2
    ORDER BY Director_last ASC;
    -- remove the movies where the last name ends with 'R-Z'
    SET SQL_SAFE_UPDATES = 0;
    DELETE FROM moviesV2 WHERE REGEXP_LIKE (Director_last, '[r-z]$', 'i');
    -- write a query where the first three appear 
    SELECT * FROM moviesV2 LIMIT 3;
    
    
    -- Very Hard Challenge 
    
