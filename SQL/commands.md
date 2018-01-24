Command | Description
---|---
`SELECT` | Retrieve data of one or more rows from more than one or more tables
`INSERT INTO` | Add one or more rows into a single table
`UPDATE` | Modifies one or more rows in a single table
`DELETE FROM` | Remove one or more rows from a single table

## Examples

```SQL
SELECT first_name, last_name FROM contacts; -- get first_name and last_name columns from the table contacts
INSERT INTO contacts (first_name, last_name) VALUES ('John','Doe'); -- create new row 
UPDATE contacts SET last_name = 'Smith' WHERE id = 1; --if there wasnt a WHERE clause it would replace all data in the last_name column to have the value of 'Smith'
DELETE FROM contacts WHERE id = 2;
```
