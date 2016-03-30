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
        return knex.select('authors.id as authors_id', '*')
        .from('authors')
        .leftJoin('catalog', 'authors.id', 'catalog.author_id')
        .leftJoin('books', 'books.id', 'catalog.book_id')
        .orderBy('authors.lname');
    },
    singleAuthor: function(id) {
        return knex.select('authors.id as authors_id', '*')
        .from('authors')
        .where('authors.id', id)
        .leftJoin('catalog', 'authors.id', 'catalog.author_id')
        .leftJoin('books', 'books.id', 'catalog.book_id');
    },
    deleteAuthor: function (id) {
        return Authors().where('id', id).del();
    },
    addAuthor: function (data) {
        return Authors()
        .insert(data, 'id');
    },
    //Adds a book_id--author_id join row to catalog
    addCatalog: function (book_author_array) {
        return knex('catalog').insert(book_author_array);
    },
    //Deletes rows in catalog table that contain author_id
    deleteCatalog: function (author_id) {
        return knex('catalog').where('author_id',author_id).del();
    },
    updateAuthor: function (id, data) {
        return Authors().where('id', id)
        .update(data);
    }
}

