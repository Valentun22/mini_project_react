import {useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import css from './MoviesCard.module.css';
import {useAppDispatch, useAppSelector} from "../../../hooks/useReduxHooks";
import {moviesActions} from "../../../redux/slices/moviesSlice";
import {MovieCard} from "../MovieCard/MovieCard";

const MoviesCard = () => {
    const {movieCard} = useAppSelector(state => state.movies);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const {id} = useParams<{ id?: string }>();

    useEffect(() => {
        dispatch(moviesActions.getByMovieId(parseInt(id)))
    }, [dispatch, id]);

    const goBack = () => {
        navigate(-1);
    };

    return (
        <div>
            <div className={css.backBtn}>
                <img src={'https://cdn-icons-png.flaticon.com/512/93/93634.png'} alt={'img'}/>
                <button onClick={goBack}>Go back</button>
            </div>
            {movieCard && <MovieCard movieCard={movieCard}/>}
        </div>
    );
};

export {MoviesCard};