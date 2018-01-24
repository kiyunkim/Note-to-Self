Command | Description
---|---
`SELECT` | Retrieve data of one or more rows from more than one or more tables
`INSERT INTO` | Add one or more rows into a single table
`UPDATE` | Modifies one or more rows in a single table
`DELETE FROM` | Remove one or more rows from a single table

## Examples

```SQL
SELECT first_name, last_name FROM contacts; -- returns first_name and last_name columns/data from the table contacts; FROM clause is required if column names are stated
SELECT person.first_name, person.last_name FROM person; -- good practice: table qualify the names of the columns
SELECT p.first_name, p.last_name FROM person p; -- make alias of table name

SELECT 'Hello','World'; --not getting data; returns a row with two columns with this data
INSERT INTO contacts (first_name, last_name) VALUES ('John','Doe'); -- create new row 
UPDATE contacts SET last_name = 'Smith' WHERE id = 1; --if there wasnt a WHERE clause it would replace all data in the last_name column to have the value of 'Smith'
DELETE FROM contacts WHERE id = 2;
```


## Questions 

- After you set alias to a table in `SELECT` can you have the same alias for another table in a different line
- Note to self: Review `SELECT 'string';`
