const API_KEY = import.meta.env.VITE_TMDB_API_KEY 
const BASE_URL = 'https://api.themoviedb.org/3';

export async function getPopularMovies({page}) {
        const res = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}`)
        const data = await res.json()
        return data;
}

export async function getMovie(movieId){
        const res = await fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`)
        const data = await res.json();
        return data;

}


export async function searchMovies(query, page = 1) { // ✅ à ajouter
  const res = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}&page=${page}`
  );
  const data = await res.json();
  return data;
}