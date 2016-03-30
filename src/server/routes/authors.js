var express = require('express');
var router = express.Router();
var pg = require('pg');
var authorQueries = require('../../../db/authorQueries');
var bookQueries = require('../../../db/queries');

router.get('/', function(req, res, next) {

  authorQueries.listAll()
  .then(function(data) {
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
    var authorArray = addBookArray(data);
    res.render('author_show', { authorArray:authorArray});
  })
  .catch(function(err) {
    console.log('Error:', err);
    return err;
  });
});

router.get('/:id/edit', function(req, res, next) {
  authorQueries.singleAuthor(req.params.id)
  .then(function(data) {
    var authorArray = addBookArray(data);
    authorQueries.Books()
    .then(function(data) {
      res.render('author_new_edit', {data:data, authorArray:authorArray});
    });
  })
  .catch(function(err) {
    console.log('Error:', err);
    return err;
  });
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

//This route handles insert AND update requests
router.post('/new', function(req, res, next) {

  //If this is an edit i.e. author already has an author id
  if (req.body.id) {
    authorQueries.updateAuthor(req.body.id, {
      fname: req.body.fname,
      lname: req.body.lname,
      bio: req.body.bio,
      img: req.body.img
    })
    .then(function(id) {
      var bookIDArray = req.body.books;
      var insertArray = [];

      //First delete all author's existing rows in catalog so no duplicates are added
      authorQueries.deleteCatalog(req.body.id).then(function () {
        //If author updated has books selected in form
        if (req.body.books) {
          //If only one book was selected
          if (typeof req.body.books === 'string') {
            var obj = {};//Rows to be added to catalog
            obj['book_id'] = req.body.books;
            obj['author_id'] = req.body.id;
            insertArray.push(obj);
          }
          else {//books is an array if more than 1
            for (var i = 0; i < bookIDArray.length; i++) {
              var prop = bookIDArray[i];
              var obj = {};//Rows to be added to catalog
              obj['book_id'] = prop;
              obj['author_id'] = req.body.id;
              insertArray.push(obj);
            }
          }
          //Then add row(s) to catalog from insertArray
          console.log(insertArray);
          authorQueries.addCatalog(insertArray).then(function(){
            res.redirect('/authors/' + req.body.id);
          });
        }
        res.redirect('/authors/' + req.body.id);
      })
    })
    .catch(function(err) {
      console.log('Error:', err);
      return err;
    });

  }
  else {//If this is a new Author
    authorQueries.addAuthor({
      fname: req.body.fname,
      lname: req.body.lname,
      bio: req.body.bio,
      img: req.body.img
    })
    .then(function(id) {
      var bookIDArray = req.body.books;
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
  }
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