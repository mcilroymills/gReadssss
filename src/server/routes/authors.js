var express = require('express');
var router = express.Router();
var pg = require('pg');
var queries = require('../../../db/queries');

router.get('/', function(req, res, next) {
  res.render('authors', { title: 'Express' });
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
    res.redirect('authors', { title: 'Express'})
});

router.post('/new', function(req, res, next) {
  res.redirect('authors', { title: 'Express' });
});

router.post('/:id/edit', function(req, res, next) {
    res.redirect('authors', { title: 'Express' })
});

module.exports = router;