import {useNavigate} from "react-router-dom";
import css from './SearchMovies.module.css';
import {useAppSelector} from "../../../hooks/useReduxHooks";
import {Movie} from "../../MoviesListComponents/Movie/Movie";

const SearchMovies = () => {
    const {movies} = useAppSelector(state => state.search);
    const navigate = useNavigate();
    const goBack = () => {
        navigate('/movies');
    };
    return (
        <div>
            <div className={css.backBtn}>
                <button onClick={goBack}>Back</button>
            </div>
            <div className={css.Movies_list}>
                {movies && movies.map((movie) => (
                    <Movie key={movie.id} movie={movie}/>
                ))}
            </div>
        </div>
    );
};

export {SearchMovies};