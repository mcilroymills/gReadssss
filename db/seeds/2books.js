
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('books').del(),

    // Inserts seed entries
    knex('books').insert({
        title: 'Outlander',
        description: 'Absorbing and heartwarming, this first novel lavishly evokes the land and lore of Scotland, quickening both with realistic characters and a feisty, likable heroine. English nurse Claire Beauchamp Randall and husband Frank take a second honeymoon in the Scottish Highlands in 1945. When Claire walks through a cleft stone in an ancient henge, she\'s somehow transported to 1743. She encounters Frank\'s evil ancestor, British captain Jonathan "Black Jack" Randall, and is adopted by another clan. Claire nurses young soldier James Fraser, a gallant, merry redhead, and the two begin a romance, seeing each other through many perilous, swashbuckling adventures involving Black Jack. Scenes of the Highlanders\' daily life blend poignant emotions with Scottish wit and humor. Eventually Sassenach (outlander) Claire finds a chance to return to 1945, and must choose between distant memories of Frnak and her happy, uncomplicated existence with Jamie. Claire\'s resourcefulness and intelligent sensitivity make the love-conquers-all, happily-ever-after ending seem a just reward.',
        cover: 'http://ecx.images-amazon.com/images/I/61o%2BneALICL.jpg'
    }),
    knex('books').insert({
        title: 'Voyager',
        description: 'The heroine of the bestselling Outlander, Claire, returns in Voyager as a mother to Brianna Randall and living in Boston in the year 1968. The preceding novel, Dragonfly in Amber, ended with Claire and Brianna coming to grips with the truth of the identity of Brianna\'s real father, Jamie Fraser, and Claire\'s travel through time. In Voyager, Claire and Brianna trace Jamie\'s life since the battle of Culloden during the Jacobite rising of 1745. Discovering Jamie survived the massacre that heralded the destruction of many clans in Scotland sends Claire back to the stone circle that first hurtled her through time - twenty years before.',
        cover: 'http://ecx.images-amazon.com/images/I/419iYtJrHFL.jpg'
    }),
    knex('books').insert({
        title: 'American Psycho',
        description: 'This review is based on the galley issued by Ellis\'s original publisher, Simon & Schuster, before it cancelled the book. The book is now going through the editing process at Vintage. There may be some changes in the final version. The indignant attacks on Ellis\'s third novel (see News, p. 17; Editorial, p. 6) will make it difficult for most readers to judge it objectively. Although the book contains horrifying scenes, they must be read in the context of the book as a whole; the horror does not lie in the novel itself, but in the society it reflects. In the first third of the book, Pat Bateman, a 26-year-old who works on Wall Street, describes his designer lifestyle in excruciating detail. This is a world in which the elegance of a business card evokes more emotional response than the murder of a child. Then suddenly, for no apparent reason, Bateman calmly and deliberately blinds and stabs a homeless man. From here, the body count builds, as he kills a male acquaintance and sadistically tortures and murders two prostitutes, an old girlfriend, and a child he passes in the zoo. The recital of the brutalization is made even more horrible by the first-person narrator\'s delivery: flat, matter-of-fact, as impersonal as a car parts catalog. The author has carefully constructed the work so that the reader has no way to understand this killer\'s motivations, making it even more frightening. If these acts cannot be explained, there is no hope of protection from such random, senseless crimes. This book is not pleasure reading, but neither is it pornography.',
        cover: 'http://ecx.images-amazon.com/images/I/4168mnsMoEL.jpg'
    }),
    knex('books').insert({
        title: 'You\'re Never Weird on the Internet (Almost)',
        description: 'From online entertainment pioneer, actress, and “queen of the geeks” Felicia Day, You’re Never Weird on the Internet (Almost) is a “relentlessly funny and surprisingly inspirational” (Forbes.com), memoir about her unusual upbringing, her rise to internet stardom, and embracing her weirdness to find her place in the world.',
        cover: 'http://ecx.images-amazon.com/images/I/81B2tt701KL.jpg'
    }),
    knex('books').insert({
        title: 'Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future',
        description:
        cover: 'http://ecx.images-amazon.com/images/I/5174GQsw2oL.jpg'
    }),
    knex('books').insert({
        title:
        description:
        cover:
    })
  );
};
