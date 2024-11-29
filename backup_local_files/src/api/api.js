// Arquivo para requisições à API
export const fetchMovies = async () => {
  const response = await fetch('https://challenge.outsera.tech/api/movies');
  return response.json();
};
