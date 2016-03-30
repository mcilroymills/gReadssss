var express = require('express');
var router = express.Router();
var pg = require('pg');
var queries = require('../../../db/queries');

router.get('/', function(req, res, next) {
    queries.Books()
    .then(function(bookResult) {
        var bookQuery = {};

        bookResult.map(function(book){
            book.authors = [];
            book.genre = {};
            bookQuery[book.id] = book;
        });

        queries.AuthorsByBookId()
        .then(function(authorResult){
            authorResult.map(function(author){
                bookQuery[author.book_id].authors.push(author);
            });
            queries.GenreByBookId()
            .then(function(genreResult) {
                var promise = new Promise(function (resolve, reject) {
                    genreResult.map(function(genre) {
                        bookQuery[genre.book_id].genre = {
                            id: genre.id,
                            name: genre.name
                        };
                    });
                    resolve();
                });
                return promise;
            })
            .catch(function(err) {
                return next(err);
            })
            .then(function () {
                res.render('books', {
                    title: 'All Books',
                    books: bookQuery,
                    total: bookResult.length
                })
            })
            .catch(function(err){
                return next(err);
            })
        })
        .catch(function(err) {
            return next(err);
        })
    })
    .catch(function(err) {
        return next(err);
    })
});

router.get('/new', function(req, res, next) {
    queries.Genres()
    .then(function(genres) {
        var genres = genres;
        queries.Authors()
        .then(function(authors) {
            res.render('book_new_edit', {
                title: 'Add New Book',
                authors: authors,
                genres: genres
            });
        })
    })
});

router.get('/:id', function(req, res, next) {
    var urlID = req.params.id
    queries.Books().where('id', urlID)
    .then(function(bookResult) {
        var bookQuery = bookResult[0];
        bookQuery.authors = [];
        bookQuery.genre = {};
        queries.OneAuthorByBookId(urlID)
        .then(function(authorResult){
            authorResult.map(function(author){
                bookQuery.authors.push(author);
            });
            queries.GenreForOneBook(urlID)
            .then(function(genreInfo) {
                genreInfo = genreInfo[0];
                bookQuery.genre.id = genreInfo.id;
                bookQuery.genre.name = genreInfo.name;

                res.render('book_show', {
                    title: bookQuery.title,
                    book: bookQuery
                })
            })
            .catch(function(err) {
                return next(err);
            })
        })
        .catch(function(err) {
            return next(err);
        })
    })
    .catch(function(err) {
        return next(err);
    })
});


router.get('/:id/edit', function(req, res, next) {
    var urlID = req.params.id
    queries.Books().where('id', urlID)
    .then(function(bookResult) {
        var bookQuery = bookResult[0];
        bookQuery.authors = [];
        bookQuery.genre = {};
        queries.Genres()
        .then(function(genres) {
            var genres = genres;
            queries.Authors()
            .then(function(authorlist) {
                var authorList = authorlist;
                queries.OneAuthorByBookId(urlID)
                .then(function(authorResult){
                    authorResult.map(function(author){
                        bookQuery.authors.push(author);
                    });
                    queries.GenreForOneBook(urlID)
                    .then(function(genreInfo) {
                        genreInfo = genreInfo[0];
                        bookQuery.genre.id = genreInfo.id;
                        bookQuery.genre.name = genreInfo.name;

                        res.render('book_new_edit', {
                                title: 'Edit '+ bookQuery.title,
                                book: bookQuery,
                                bookAuthors: bookQuery.authors,
                                authors: authorList,
                                genres: genres
                            })
                    })
                    .catch(function(err) {
                        return next(err);
                    })

                })
            })
        })
    })
    .catch(function(err) {
        return next(err);
    })
});

// +++++++++++++++++++++++++ POSTS ++++++++++++++++++++++++++ \\

router.post('/new', function(req, res, next) {
  queries.addBook(req.body)
  .then(function() {
    res.redirect('/');
  })
  .catch(function(err) {
    console.log('Error:', err);
    return err;
  });
});

router.post('/new-go-to-add-author', function(req, res, next) {
  queries.addBook(req.body)
  .then(function() {
    res.redirect('/');
  })
  .catch(function(err) {
    console.log('Error:', err);
    return err;
  });
});

router.post('/:id/edit', function(req, res, next) {
  queries.editBook(req.body, req.params.id)
  .then(function() {
    res.redirect('/' + req.params.id);
  })
  .catch(function(err) {
    console.log('Error:', err);
    return err;
  });
});

router.post('/:id/edit-go-to-add-author', function(req, res, next) {
  queries.editBook(req.body, req.params.id)
  .then(function() {
    res.redirect('/authors/new');
  })
  .catch(function(err) {
    console.log('Error:', err);
    return err;
  });
});

router.post('/:id/delete', function(req, res, next) {
  queries.deleteBook(req.params.id)
  .then(function() {
    res.redirect('/books');
  })
  .catch(function(err) {
    console.log('Error:', err);
    return err;
  });
});

module.exports = router;
