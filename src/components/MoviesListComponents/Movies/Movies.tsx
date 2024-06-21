import {useEffect} from "react";
import css from './Movies.module.css';
import {useAppDispatch, useAppSelector} from "../../../hooks/useReduxHooks";
import {moviesActions} from "../../../redux/slices/moviesSlice";
import {Movie} from "../Movie/Movie";

const Movies = () => {
    const {movies, page} = useAppSelector(state => state.movies);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(moviesActions.getAll(page))
    }, [dispatch, page]);

    return (
        <div className={css.MoviesModule}>
            <div className={css.moviesList}>
                {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
            </div>
        </div>
    );
};

export {Movies};