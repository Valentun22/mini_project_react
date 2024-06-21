const baseUrl = 'https://api.themoviedb.org/3';

const urls = {
    movie: {
        base: `${baseUrl}/discover/movie`
    },
    movieDetails: {
        movieById: (id: number): string => `${baseUrl}/movie/${id}`
    },
    genres: {
        base: `${baseUrl}/genre/movie/list`,
        byGenreId: (genreId: number): string => `${baseUrl}/discover/movie?with_genres=${genreId}`
    },
    search: {
        base: `${baseUrl}/search/movie`
    },
};
export {
    baseUrl,
    urls
};
