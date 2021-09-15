const requests: Requests = {
  trending: {
    title: 'Trending',
    url: `/trending/all/week`,
  },
  'top-rated': {
    title: 'Top Rated',
    url: `/movie/top_rated`,
  },
  'action-movies': {
    title: 'Action',
    url: `/discover/movie?with_genres=28`,
  },
  'comedy-movies': {
    title: 'Comedy',
    url: `/discover/movie?with_genres=35`,
  },
  'horror-movies': {
    title: 'Horror',
    url: `/discover/movie?with_genres=27`,
  },
  'romance-movies': {
    title: 'Romance',
    url: `/discover/movie?with_genres=10749`,
  },
  'mystery-movies': {
    title: 'Mystery',
    url: `/discover/movie?with_genres=9648`,
  },
  'scifi-movies': {
    title: 'Sci-Fi',
    url: `/discover/movie?with_genres=878`,
  },
  'western-movies': {
    title: 'Western',
    url: `/discover/movie?with_genres=37`,
  },
  'animation-movies': {
    title: 'Animation',
    url: `/discover/movie?with_genres=16`,
  },
  'tv-movie': {
    title: 'TV Movie',
    url: `/discover/movie?with_genres=10770`,
  },
}

interface Requests {
  [query: string]: {
    title: string
    url: string
  }
}

export default requests
