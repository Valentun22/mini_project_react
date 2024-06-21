import {IGenreInterfaces} from "./IGenreInterfaces";

export interface IMovieInterface {
    id?: number;
    title?: string;
    poster_path?: string;
    overview?: string;
    genres?: IGenreInterfaces[];
    release_date?: string;
    runtime?: number;
    vote_average?: number;
    backdrop_path?: string;
    adult?: false,
    genre_ids?: IGenreInterfaces[],
    original_language?: string,
    original_title?: string,
    popularity?: number,
    video?: boolean,
    vote_count?: number,
}