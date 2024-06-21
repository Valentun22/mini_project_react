import {Genres} from "../components/GenresInfoComponent/Genres/Genres";
import {Movies} from "../components/MoviesListComponents/Movies/Movies";
import {MoviesPagination} from "../components/Pagination/MoviesPagination";

const MoviesListPage = () => {
    return (
        <div>
            <Genres/>
            <Movies/>
            <MoviesPagination/>
        </div>
    );
};

export {MoviesListPage};