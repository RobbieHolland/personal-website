import Image from 'next/image';

export default function BookMovieRatings() {
  const books = [
    {
      title: 'Wild Swans: Three Daughters of China',
      author: 'Jung Chang',
      image: '/books_movies/books/wild_swans.webp',
      rating: 5,
      review: 'Description coming soon...'
    },
    {
      title: 'American Prometheus: The Triumph and Tragedy of J. Robert Oppenheimer',
      author: 'Kai Bird and Martin J. Sherwin',
      image: '/books_movies/books/american_prometheus.jpg',
      rating: 4.5,
      review: 'Description coming soon...'
    },
    {
      title: 'The Three-Body Problem',
      author: 'Liu Cixin',
      image: '/books_movies/books/three_body_problem.jpg',
      rating: 4.5,
      review: 'Description coming soon...'
    },
    {
      title: 'The Princess Bride',
      author: 'William Goldman',
      image: '/books_movies/books/the_princess_bride.jpg',
      rating: 4.5,
      review: 'Description coming soon...'
    },
    {
      title: 'A Wizard of Earthsea',
      author: 'Ursula K. Le Guin',
      image: '/books_movies/books/a_wizard_of_earthsea.jpg',
      rating: 4,
      review: 'Description coming soon...'
    },
    {
      title: 'The Right Stuff',
      author: 'Tom Wolfe',
      image: '/books_movies/books/the_right_stuff.jpg',
      rating: 4,
      review: 'Description coming soon...'
    },
    {
      title: 'The House of God',
      author: 'Samuel Shem',
      image: '/books_movies/books/the_house_of_god.jpg',
      rating: 4,
      review: 'Description coming soon...'
    },
    {
      title: 'Lord of the Flies',
      author: 'William Golding',
      image: '/books_movies/books/lord_of_the_flies.jpeg',
      rating: 4.5,
      review: 'Description coming soon...'
    },
    {
      title: 'Mistborn (Mistborn Series)',
      author: 'Brandon Sanderson',
      image: '/books_movies/books/mistborn.jpg',
      rating: 4,
      review: 'Description coming soon...'
    },
    {
      title: 'The Name of the Wind (The Kingkiller Chronicle)',
      author: 'Patrick Rothfuss',
      image: '/books_movies/books/name_of_the_wind.jpg',
      rating: 4,
      review: 'Description coming soon...'
    },
    {
      title: 'Stoner',
      author: 'John Williams',
      image: '/books_movies/books/stoner.jpg',
      rating: 3.5,
      review: 'Description coming soon...'
    },
    {
      title: 'Fight Club',
      author: 'Chuck Palahniuk',
      image: '/books_movies/books/fight_club.jpg',
      rating: 3.5,
      review: 'Description coming soon...'
    },
    {
      title: 'Norwegian Wood',
      author: 'Haruki Murakami',
      image: '/books_movies/books/norwegian_wood.jpg',
      rating: 3.5,
      review: 'Description coming soon...'
    },
    {
      title: 'The Poppy War (The Poppy War Series)',
      author: 'R.F. Kuang',
      image: '/books_movies/books/poppy_war.jpg',
      rating: 4,
      review: 'Description coming soon...'
    },
    {
      title: 'Red Rising',
      author: 'Pierce Brown',
      image: '/books_movies/books/red_rising.jpg',
      rating: 4.5,
      review: 'Description coming soon...'
    },
    {
      title: 'Kafka on the Shore',
      author: 'Haruki Murakami',
      image: '/books_movies/books/kafka_on_the_shore.jpg',
      rating: 4,
      review: 'Description coming soon...'
    },
    {
      title: 'One Hundred Years of Solitude',
      author: 'Gabriel García Márquez',
      image: '/books_movies/books/100_years_of_solitude.jpg',
      rating: 4,
      review: 'Description coming soon...'
    },
    {
      title: 'Sapiens: A Brief History of Humankind',
      author: 'Yuval Noah Harari',
      image: '/books_movies/books/sapiens.jpg',
      rating: 4,
      review: 'Description coming soon...'
    },
    {
      title: 'Awaken Online (Awaken Online Series)',
      author: 'Travis Bagwell',
      image: '/books_movies/books/awaken_online.jpg',
      rating: 4,
      review: 'Description coming soon...'
    },
    // Add more books here
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Book and Movie Ratings</h1>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Favourite Books</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {books.map((book, index) => (
            <div key={index} className="flex items-center gap-4">
              <Image
                src={book.image}
                alt={book.title}
                width={150}
                height={225}
                className="rounded-lg"
              />
              <div>
                <h3 className="text-xl font-semibold">{book.title}</h3>
                <p className="text-gray-600">By: {book.author}</p>
                <p className="text-yellow-500">{'★'.repeat(Math.floor(book.rating)) + (book.rating % 1 ? '½' : '')}</p>
                <p className="text-gray-600">{book.review}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-4">Movies</h2>
        <p className="text-gray-600">Check out my movie ratings on <a href="https://letterboxd.com/RobbieHolland/" target="_blank" className="text-blue-500 hover:text-blue-700">Letterboxd</a>.</p>
      </section>
    </div>
  );
} 