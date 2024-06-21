import {IMovieInterface} from "./IMovieInterface";

export interface ISearchInterface {
    page: number;
    results: IMovieInterface[];
    total_pages: number;
    total_results: number;
}