CREATE TABLE test_table(
    sometext VARCHAR(100)
);

INSERT INTO test_table(sometext)
VALUES ('abc');

SELECT sometext
FROM test_table;