import {MoviesByGenre} from "../components/MoviesByGenreComponents/MoviesByGenre/MoviesByGenre";
import {MoviesByGenresPagination} from "../components/Pagination/MoviesByGenresPagination";

const MoviesByGenrePage = () => {
    return (
        <div>
            <MoviesByGenre/>
            <MoviesByGenresPagination/>
        </div>
    );
};

export {MoviesByGenrePage};