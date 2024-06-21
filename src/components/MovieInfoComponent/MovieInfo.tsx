import {FC} from 'react';
import css from './MovieInfo.module.css';
import {IGenreInterfaces} from "../../interfaces/IGenreInterfaces";
import {Genre} from "../GenresInfoComponent/Genre/Genre";
import {StarRatingForMovie} from "../StarRatingComponent/StarRatingForMovie";
import {useAppSelector} from "../../hooks/useReduxHooks";


interface IProps{
    title: string,
    overview: string,
    vote_average: number,
    backdrop_path: string,
    release_date: string,
    runtime: number,
    genres: IGenreInterfaces[];
    onGenreClick: (genre: IGenreInterfaces) => void;
    poster_path: string
    original_language: string,
}


const MovieInfo: FC<IProps> = ({   title, overview, vote_average, backdrop_path,
                                   release_date, runtime, genres, onGenreClick, poster_path, original_language
                               }) => {
    const {genreMoviesCount, total_pages, activeGenreId} = useAppSelector(state => state.genres);

    return (
        <div className={css.MovieInfo}>
            <div className={css.titleName}>{title}</div>
            <div className={css.infoBlock}>
                <img className={css.iconStyle} src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title}/>
                <div className={css.info}>
                    <h2>Genres this movie:</h2>
                    <div className={css.movieGenres}>
                        {genres.map((genre, index) => (
                            <Genre
                                key={index}
                                genre={genre}
                                onGenreClick={onGenreClick}
                                isActive={genre.id === activeGenreId}
                                count={genreMoviesCount[genre.id] * total_pages || 0}
                            />
                        ))}
                    </div>
                    <h2>Runtime: {runtime} minutes</h2>
                    <h2>Release date: {release_date}</h2>
                    <h2>Original language: "{original_language}"</h2>
                </div>
            </div>
            <div className={css.starRating}>
                <StarRatingForMovie rating={vote_average}/>
            </div>
            <div className={css.backdropStyleSize}>
                <img className={css.backdropStyle} src={`https://image.tmdb.org/t/p/w500${backdrop_path}`} alt={title}/>
                <div className={css.infoPost}>
                    <h2 className={css.summary}>About the movie:</h2>
                    <h3 className={css.overview}>{overview}</h3>
                </div>
            </div>
        </div>
    );
};

export {MovieInfo};