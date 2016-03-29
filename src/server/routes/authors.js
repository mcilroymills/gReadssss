var express = require('express');
var router = express.Router();
var pg = require('pg');
var queries = require('../../../db/authorQueries');

router.get('/', function(req, res, next) {
  queries.listAll()
  .then(function(data) {

    var authorArray = [];//Array of unique author objects
    var authorIDArray =[];//Array of author id's
    var bookArray = [];

   data.forEach(function(el){
      if (authorIDArray.indexOf(el['author_id']) === -1) {
        authorIDArray.push(el.author_id);
      }
    })

   for (var i = 0; i < authorIDArray.length; i++) {
     for (var j = 0; j < data.length; j++) {
      if (authorIDArray[i] === data[j].author_id) {
        authorArray.push(data[j]);
        break;
      }
     }
   };

  for (var i = 0; i < authorArray.length; i++) {
      for (var j = 0; j < data.length; j++) {
        if (authorArray[i].author_id === data[j].author_id)
          bookArray.push(data[j].title);
      }
      authorArray[i].bookArray = bookArray;
      bookArray =[];
    }

    res.render('authors', { authorArray:authorArray});

  })
  .catch(function(err) {
    console.log('Error:', err);
    return err;
  });
});

router.get('/:id', function(req, res, next) {
  res.render('author_show', { title: 'Express' });
});

router.get('/:id/edit', function(req, res, next) {
  res.render('author_new_edit', { title: 'Express' });
});

router.get('/new', function(req, res, next) {
  res.render('author_new_edit', { title: 'Express' });
});

router.post('/:id/delete', function(req, res, next) {
    queries.deleteAuthor(req.params.id)
  .then(function(id) {
    res.redirect('/authors');
  })
  .catch(function(err) {
    console.log('Error:', err);
    return err;
  });
});

router.post('/new', function(req, res, next) {
  res.redirect('authors', { title: 'Express' });
});

router.post('/:id/edit', function(req, res, next) {
    res.redirect('authors', { title: 'Express' })
});

module.exports = router;