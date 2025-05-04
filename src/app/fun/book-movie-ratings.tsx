import Image from 'next/image';

export default function BookMovieRatings() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Book and Movie Ratings</h1>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Books</h2>
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <Image
              src="/books_movies/wild_swans.webp"
              alt="Wild Swans: Three Daughters of China"
              width={100}
              height={150}
              className="rounded-lg"
            />
            <div>
              <h3 className="text-xl font-semibold">Wild Swans: Three Daughters of China</h3>
              <p className="text-gray-600">By: Jung Chang</p>
              <p className="text-yellow-500">★★★★★</p>
              <p className="text-gray-600">A captivating and insightful journey through the lives of three generations of women in China.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-4">Movies</h2>
        <p className="text-gray-600">Check out my movie ratings on <a href="https://letterboxd.com/RobbieHolland/" target="_blank" className="text-blue-500 hover:text-blue-700">Letterboxd</a>.</p>
      </section>
    </div>
  );
} 