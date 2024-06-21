import {useNavigate} from "react-router-dom";
import {IMovieInterface} from "../../../interfaces/IMovieInterface";
import {StarRatingForMovie} from "../../StarRatingComponent/StarRatingForMovie";
import css from './MovieByGenre.module.css';
import {FC} from "react";

interface IProps {
    movieByGenre: IMovieInterface
}

const MovieByGenre: FC<IProps> = ({movieByGenre}) => {
    const {title, poster_path, vote_average, id} = movieByGenre;
    const navigate = useNavigate();
    return (
        <div onClick={() => navigate(`/movie/${id}`)} className={css.MovieByGenre}>
            <img className={css.poster} src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title}/>
            <StarRatingForMovie rating={vote_average}/>
            <div className={css.ganreTitle}>{title}</div>
        </div>
    );
};

export {MovieByGenre};