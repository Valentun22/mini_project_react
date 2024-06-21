import {SearchMovies} from "../components/SearchMoviesComponents/SearchMovies/SearchMovies";
import {SearchPagination} from "../components/Pagination/SearchPagination";
const SearchPage = () => {
    return (
        <div>
            <SearchMovies/>
            <SearchPagination/>
        </div>
    );
};

export {SearchPage};