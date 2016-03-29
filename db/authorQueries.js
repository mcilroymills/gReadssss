var knex = require('./knex');

function Authors() {
    return knex('authors');
}

function Books() {
    return knex('books');
}

module.exports = {
    Authors: function() {
        return Authors();
    },
    Books: function() {
        return Books();
    },
    listAll: function() {
        return Authors()
        .innerJoin('catalog', 'authors.id', 'catalog.author_id')
        .innerJoin('books', 'books.id', 'catalog.book_id')
        .orderBy('authors.lname');
    },
    singleAuthor: function(id) {
        return Authors().where('id', id);
    },
    deleteAuthor: function (id) {
        return Authors().where('id', id).del();
    }

}

