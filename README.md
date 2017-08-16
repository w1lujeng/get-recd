# get-recd 
is an app to build essential lists of music.  If you are a big fan of Nirvana, Stan Getz or anyone else, now you can share lists of your favorite albums.  Make sure friends and family don't go out and buy that ONE horrible album and have their opinions skewed forever.  Don't spend your holidays trying to convince them that 'REALLY, Frank Zappa is amazing. You just have to listen to the right album.'

Go into the record store with CONFIDENCE, using get rec'd as your guide
___

Technologies used

* Node
* Express
* HTML
* CSS
* JavaScript
* enhanced JavaScript
* Materialize
* Mongo DB
* the discogs api
* google oauth


Getting started

get rec'd is deployed using Heroku at https://get-recd.herokuapp.com

See our planning page at [Trello](https://trello.com/b/J5WLmF8H/get-recd)


Next steps

The discogs database is HUGE. In the future, we'd would like to offer different search parameters.  such as country(on the map, not Texas) or genre.  We would also like to include commenting on lists, rating lists and sharing lists with your friends.

| URI | HTTP Verb | Use Case
  --- | ------- | ------  
 /api/lists | GET  | retrieve all lists  
 /api/lists/:id | GET | a single list  





| URI | HTTP Verb | Use Case
| --- | --------- | -------- |
/myrecs/ | GET | retrieve all lists
/myrecs/new | GET | the form to make a new list
/myrecs/add | POST | add the new list
/myrecs/ |  POST |
/myrecs/about | GET | learn about the app
/myrecs/:id | DELETE |retrieve all lists


THANKS