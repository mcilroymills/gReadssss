var express = require('express');
var router = express.Router();
var pg = require('pg');
var queries = require('../../../db/authorQueries');

router.get('/', function(req, res, next) {
  queries.listAll()
  .then(function(data) {
    var authorArray = addBookArray(data);
    res.render('authors', { authorArray:authorArray});
  })
  .catch(function(err) {
    console.log('Error:', err);
    return err;
  });
});

router.get('/:id', function(req, res, next) {
  queries.singleAuthor(req.params.id)
  .then(function(data) {
    var authorArray = addBookArray(data);
    res.render('author_show', { authorArray:authorArray});
  })
  .catch(function(err) {
    console.log('Error:', err);
    return err;
  });
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

//This functions returns an array of author objects with an array of their books as a property
function addBookArray (data) {
  var authorArray = [];//Array of unique author objects
  var authorIDArray =[];//Array of author id's
  var bookArray = [];//Array of book titles

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
      if (authorArray[i].author_id === data[j].author_id) {
        bookArray.push({
          title: data[j].title,
          book_id: data[j].book_id
        });
      }
    }
    authorArray[i].bookArray = bookArray;
    bookArray =[];
  }
  console.log(authorArray);
  return authorArray;
}

module.exports = router;