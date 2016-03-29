var express = require('express');
var router = express.Router();
var pg = require('pg');
var authorQueries = require('../../../db/authorQueries');
var bookQueries = require('../../../db/queries');

router.get('/', function(req, res, next) {

  authorQueries.listAll()
  .then(function(data) {
    console.log(data);
    var authorArray = addBookArray(data);
    res.render('authors', {
      authorArray: authorArray,
      total: authorArray.length
    });
  })
  .catch(function(err) {
    console.log('Error:', err);
    return err;
  });
});

router.get('/new', function(req, res, next) {
  authorQueries.Books()
  .then(function(data) {
    res.render('author_new_edit', {data:data});
  })
  .catch(function(err) {
    console.log('Error:', err);
    return err;
  });
});

router.get('/:id', function(req, res, next) {
  authorQueries.singleAuthor(req.params.id)
  .then(function(data) {
    console.log("singleauhtorquery:  ", data)
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

router.post('/:id/delete', function(req, res, next) {
  authorQueries.deleteAuthor(req.params.id)
  .then(function(id) {
    res.redirect('/authors');
  })
  .catch(function(err) {
    console.log('Error:', err);
    return err;
  });
});

router.post('/new', function(req, res, next) {
  var newID = null;

  authorQueries.addAuthor({
    fname: req.body.fname,
    lname: req.body.lname,
    bio: req.body.bio,
    img: req.body.img
  })
  .then(function(id) {
    var bookIDArray = req.body.books;
    console.log(req.body);
    var insertArray = [];

    //If author is added with books
    if (req.body.books) {

      for (var i = 0; i < bookIDArray.length; i++) {
        var prop = bookIDArray[i];
        var obj = {};
        obj['book_id'] = prop;
        obj['author_id'] = id[0];
        insertArray.push(obj);
      }
      console.log("insertarray: ", insertArray);
      authorQueries.addCatalog(insertArray).then(function(){
        res.redirect('/authors/' + id);
      });
    }
    res.redirect('/authors/' + id);
  })
  .catch(function(err) {
    console.log('Error:', err);
    return err;
  });
});

router.post('/:id/edit', function(req, res, next) {
    res.redirect('authors', { title: 'Express' })
});

//This functions returns an array of author object(s) with an array of their books as a property
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
  return authorArray;
}

module.exports = router;