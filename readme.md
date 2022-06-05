## What I learned from this simple CRUD project and John Smilga lecture:

* collections to represent group of items (instead of tables)
* document-based which represents a single item (instead of row)
* use Mongo Atlas since ultimately gonna use it.
    * steps:
        1. build cluster
        2. create first db user
        3. add IP address (whitelist for all for simplicity)
        4. connect

* If deploying to heroku, IP address must be set to allow everywhere
* Database > Collection > Document
* MongoDB has dynamic schema, i.e. 2 documents in a collection don't necessarily share the same schema 😅 Therefore we should use Mongoose to create consistent schema.
* PUT VS PATCH
* PUT: replace the existing resource
* PATCH: partial update
* Don't set up one type of response or one route then go totally different in a different route, this can avoid confusion to user *
* Always set PORT to process.env.PORT || 3000 to ease up deployment 

