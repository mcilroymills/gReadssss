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
    AuthorsByBookId: function() {
        return Authors()
            .innerJoin('catalog','authors.id', 'catalog.author_id')
            .orderBy('catalog.book_id');
    },
    listAll: function() {
        return Books()
        .innerJoin('catalog', 'books.id', 'catalog.book_id')
        .innerJoin('authors', 'authors.id', 'catalog.author_id')
        .orderBy('title');
    },
    listOne: function(id) {
        return Authors()
        .innerJoin('catalog', 'authors.id', 'catalog.author_id')
        .innerJoin('books', 'books.id', 'catalog.book_id')
        .where('id', id);
    },
    deleteBook: function(id) {
        return Books.where('id', id).del();
    }
}

