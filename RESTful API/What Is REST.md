# RESTful API

*so rest just an architectural style to design API's*

**REpresentational**

**State**

**Transfer**



- In HTTP request may be somebody might hijack our card details.

- That's why we can also use cryptography and encrypt our request so if anybody does intercept the request they won't be able to know what it says

## HTTP verbs

* GET
* POST
* PUT
* PATCH
* DELETE

*These verbs that we should we use to make API RESTful*

1. GET - READ.
```
app.get(function(req, res) {
  // returns data as a result
  });
```
2. POST - CREATE
```
app.post(function(req, res) {
  // save data for later, the response will 'success' or an error log.
  });
```
3. PUT, PATCH - UPDATE. Both go to DB and update it.
```
app.patch(function(req, res) {
  // updating code
  });
```
- **Difference between PUT/PATCH:**
* PUT - sending an entire new entry to replace the previous one;
* PATCH - sending only one new part.

4. DELETE - DELETE:
```
app.delete(function(req, res) {
  // fire, baby
  });
```
