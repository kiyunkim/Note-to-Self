# SQL: Stuctured Query Language

- Has a very particular purpose, unlike JavaScript; **To manipulate sets of data typically from a relational database**
- ANSI and ISO Standars

## Terms

- **Database**: A container to help organize data; efficient way to store and retrieve data
- **Relational model**: Describes how we're going to store the data in the databaseand how the pieces of individual data are going to contain relationships to each other; based on math
- **SQL Statemet**: Expression that tells a database what to do
  - **Identifier** is something inside the database to call (e.g. Email)

## Tables

- Data is stored in tables
- Has table names, column names, etc
- Columns have restrictions: size, type, format, etc of the data
  - Can be required or not required
  
Table Name: Contacts

First Name | Last Name | Email
--- | --- | ---
John | Doe | jdoe@gmail.com
Cher | `null` | `null`

- Turn questions (e.g. What are all my contacts that have a last name that starts with D?) into SQL and execute against the database. This is known as querying.
- **Querying**: Asking questions of the database and hope the database gives an answer back (if there's no data or is set up where it doesn't allow that question, there won't be an answer to be returned)
- Above is a bad example of a table because - what if John has multiple emails?

> ### Database design should be built in a way that allows us to ask questions and get answers today, and will work for the questions I want to ask later on

- Database design controls the questions you can ask later.
- SQL is the language you use to ask the questions.


```SQL
SELECT first_name FROM person;
-- select the column first_name from the table called person
```

## TL;DR

SQL talks to a database
