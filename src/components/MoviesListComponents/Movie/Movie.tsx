import {FC,} from 'react';
import css from './Movie.module.css';
import {useNavigate} from "react-router-dom";
import {IMovieInterface} from "../../../interfaces/IMovieInterface";
import {StarRatingForMovie} from "../../StarRatingComponent/StarRatingForMovie";

interface IProps {
    movie: IMovieInterface
}

const Movie: FC<IProps> = ({movie}) => {
    const {id, title, poster_path, vote_average} = movie;
    const navigate = useNavigate();
    return (
        <div onClick={() => navigate(`/movie/${id}`)} className={css.Movie}>
            <img className={css.poster} src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={'img'}/>
            <StarRatingForMovie rating={vote_average}/>
            <div className={css.titleText}>{title}</div>
        </div>
    );
};

export {Movie};