# JSON

- JavaScript Object Notation
- String to object, object to string
  > Data from server as string -> use `parse()` to convert into a JSON object
  > JSON data as object -> use `stringify()` to send through URL

```json
{
  "name": "value",
  "thing": {
    "name": "value",
    "thing's thing": {
      "name": "value"
    }
  },
  "name": "value"
}
```

# AJAX

- Asynchronous JavaScript And Xml (though now JSON is preferred to XML)
- XML HTTP Request `XMLHttpRequest()`