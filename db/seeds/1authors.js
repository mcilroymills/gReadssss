
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('authors').del(),

    // Inserts seed entries
    knex('authors').insert({
        fname: 'Diana',
        lname: 'Gabaldon',
        bio: 'Diana Gabaldon is the New York Times bestselling author of the wildly popular Outlander novels-Outlander, Dragonfly in Amber, Voyager, Drums of Autumn, The Fiery Cross, and A Breath of Snow and Ashes (for which she won a Quill Award and the Corine International Book Prize)-and one work of nonfiction, The Outlandish Companion, as well as the bestselling series featuring Lord John Grey, a character she introduced in Voyager. She lives in Scottsdale, Arizona.',
        img: 'http://ecx.images-amazon.com/images/I/31dBC0E4jFL._SY200_.jpg'
    }),
    knex('authors').insert({
        fname: 'Felicia',
        lname: 'Day',
        bio: 'Felicia Day is a professional actress who has appeared in numerous mainstream television shows and films, including a two-season arc on the SyFy series Eureka. She is currently recurring on The CW show Supernatural. However, Day is best known for her work in the web video world, behind and in front of the camera. She co-starred in Joss Whedon’s Emmy Award-winning Internet musical, Dr. Horrible’s Sing-Along Blog. She also created and starred in the hit web series The Guild, which ran for six seasons and is currently available for viewing on every major digital outlet, including Netflix.',
        img: 'http://ecx.images-amazon.com/images/I/51dPW-WQPJL._SX150_.jpg'
    }),
    knex('authors').insert({
        fname: 'Bret',
        lname: 'Easton Ellis',
        bio: 'Bret Easton Ellis is the author of five novels and a collection of short stories; his work has been translated into twenty-seven languages. He lives in Los Angeles.',
        img: 'http://ecx.images-amazon.com/images/I/61Ul4k28CDL._SY200_.jpg'
    }),
    knex('authors').insert({
        fname: 'Ashlee',
        lname: 'Vance',
        bio: 'Ashlee Vance is an award winning feature writer for Bloomberg Businessweek magazine. Previously, he worked for The New York Times and The Register. Vance was born in South Africa, grew up in Texas and attended Pomona College. He has spent more than a decade covering the technology industry from San Francisco and is a noted Silicon Valley historian.',
        img: 'http://ecx.images-amazon.com/images/I/71iaDARbUYL._SY200_.jpg'
    }),
    knex('authors').insert({
        fname: 'Allie',
        lname: 'Brosh',
        bio: 'Allie Brosh has enjoyed writing ever since her mom tricked her into writing a story to distract her from her immediate goal of wrapping the cat in duct-tape. She started her award-winning blog in 2009. Brosh lives in Bend, Oregon, with her husband Duncan, her two dogs, and six pet rats.',
        img: 'http://ecx.images-amazon.com/images/I/71l6PgdLK4L._SY200_.jpg'
    }),
    knex('authors').insert({
        fname: 'Joss',
        lname: 'Whedon',
        bio: 'Joseph Hill "Joss" Whedon (born June 23, 1964), is an American screenwriter, executive producer, director, occasional composer and actor, and founder of Mutant Enemy Productions. He is best known as the creator and showrunner of the television series Buffy the Vampire Slayer (1997-2003), Angel (1999-2004), and Firefly (2002), which have also seen popular comic book adaptations, published by Dark Horse Comics and IDW.',
        img: 'http://ecx.images-amazon.com/images/I/51uaPL9Z73L._SY200_.jpg'
    })
  );
};
