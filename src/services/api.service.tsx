import axios from "axios";
import {baseUrl, urls} from "../constants/urls";
import {IMovieInterface} from "../interfaces/IMovieInterface";
import {ISearchInterface} from "../interfaces/ISearchInterface";
import {IGenreInterfaces} from "../interfaces/IGenreInterfaces";
import {IPromise} from "../types/reduxType";

const axiosInstance = axios.create({
    baseURL : baseUrl});

const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OWJiODg0ZDc0YzA4ZDVlZTVmNGI4OWExMmI4NTI0YSIsInN1YiI6IjY2NzEzOTUyNGUwYjU5MjVkNDBkZjNmOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oSqqBD87KsLPRJ78vxN4tD4NqcJoXWfZaXmYt2rKAp4';

axiosInstance.interceptors.request.use(request => {
    request.headers['Authorization'] = `Bearer ${accessToken}`
    return request
});

const movieService = {
    getAll: (page: number): IPromise<{ results: IMovieInterface[] }> => axiosInstance.get(urls.movie.base, {params: {page}}),
    getByMovieId: (id: number): IPromise<IMovieInterface> => axiosInstance.get(urls.movieDetails.movieById(id))
}

const searchService = {
    getAll: (query: string, page: number): IPromise<ISearchInterface> => axiosInstance.get(urls.search.base, {params: {query, page}})
};

const genreService = {
    getAll: (): IPromise<{ genres: IGenreInterfaces[] }> => axiosInstance.get(urls.genres.base),
    getByGenreId: (id: number, page?: number): IPromise<{
        results: IMovieInterface[]
    }> => axiosInstance.get(urls.genres.byGenreId(id), {params: {page}})
}

export {
    axiosInstance,
    genreService,
    movieService,
    searchService
}