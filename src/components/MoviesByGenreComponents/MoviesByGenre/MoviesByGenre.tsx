import {useEffect} from "react";
import {useParams} from "react-router-dom";
import css from './MoviesByGenre.module.css';
import {useAppDispatch, useAppSelector} from "../../../hooks/useReduxHooks";
import {genresAction} from "../../../redux/slices/genresSlice";
import {MovieByGenre} from "../MovieByGenre/MovieByGenre";

const MoviesByGenre = () => {
    const {movies, page} = useAppSelector(state => state.genres);
    const dispatch = useAppDispatch();
    const {id} = useParams<{ id?: string }>();

    useEffect(() => {
        dispatch(genresAction.getByGenreId({id: parseInt(id), page: page}));
    }, [dispatch, id, page]);

    return (
        <div className={css.MoviesByGenre}>
            <div className={css.movies_list}>
                {movies.map(movieByGenre => <MovieByGenre key={movieByGenre.id} movieByGenre={movieByGenre}/>)}
            </div>
        </div>
    );
};

export {MoviesByGenre};