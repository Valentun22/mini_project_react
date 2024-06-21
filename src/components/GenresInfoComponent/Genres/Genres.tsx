import { useAppDispatch, useAppSelector } from '../../../hooks/useReduxHooks';
import { genresAction } from '../../../redux/slices/genresSlice';
import { Genre } from '../Genre/Genre';
import css from './Genres.module.css';
import {IGenreInterfaces} from "../../../interfaces/IGenreInterfaces";
import {useEffect} from "react";

const Genres = () => {
    const {genres, activeGenreId, genreMoviesCount, total_pages} = useAppSelector(state => state.genres);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(genresAction.getAll()).then(() => {
            dispatch(genresAction.getGenreMoviesCount());
        });
    }, [dispatch]);

    const handleGenreClick = (genre: IGenreInterfaces) => {
        dispatch(genresAction.setActiveGenreId(genre.id));
    };

    return (
        <div className={css.AllGenres}>
            {genres.map(genre => <Genre key={genre.id}
                                        genre={genre}
                                        onGenreClick={handleGenreClick}
                                        isActive={genre.id === activeGenreId}
                                        count={genreMoviesCount[genre.id] * total_pages || 0}
            />)}
        </div>
    );
};

export {Genres};