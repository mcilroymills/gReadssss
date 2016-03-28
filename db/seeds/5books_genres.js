
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('books_genres').del(),

    // Inserts seed entries
    knex('books_genres').insert({
        book_id: 1,
        genre_id: 14
    }),
    knex('books_genres').insert({
        book_id: 2,
        genre_id: 14
    }),
    knex('books_genres').insert({
        book_id: 3,
        genre_id: 16
    }),
    knex('books_genres').insert({
        book_id: 4,
        genre_id: 2
    }),
    knex('books_genres').insert({
        book_id: 5,
        genre_id: 2
    }),
    knex('books_genres').insert({
        book_id: 6,
        genre_id: 7
    })
  );
};

var authorArray = [];
var bookArray = [];

for (var i = 0; i < data.length; i++) {
  if (authorArray.indexOf(data[i].lname !== -1)) {
    authorArray.push(data[i]);
  }
}

for (var i = 0; i < authorArray.length; i++) {
  for (var j = 0; j < data.length; j++) {
    if (authorArray.author_id === data.author_id)
      bookArray.push(data.title);
  }
  authorArray.bookArray = bookArray;
  bookArray =[];
}



authors: authorArray,


{% for author in authors %}
      <div>
      <h2>{{ author.fname + author.lname }}</h2>
        {% for book in books %}
        {% if  %}
        {% endfor %}
      </div>

{% endfor %}
