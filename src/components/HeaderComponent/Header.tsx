import {NavLink} from "react-router-dom";
import css from './Header.module.css';
import {useAppSelector} from "../../hooks/useReduxHooks";
import {SearchMoviesForm} from "../SearchMoviesComponents/SearchMoviesForm/SearchMoviesForm";
import {ThemeSwitcher} from "../ThemeSwitcherComponent/ThemeSwitcher";

const Header = () => {
    const {mode} = useAppSelector(state => state.theme);
    return (
        <div className={`${css.Header} ${mode === 'dark' ? css.dark : css.light}`}>
            <div className={css.logoParams}>
                <div className={css.logoParamsBack}>
                    <img className={css.logoImgUA}
                         src={'https://www.iconpacks.net/icons/1/free-movie-icon-850-thumb.png'}
                         alt={'img'}/>
                </div>
                <NavLink to={'movies'}>Movies UA</NavLink>
                <img className={css.logoImgUA}
                     src={'https://i.pinimg.com/originals/ac/32/75/ac32753c297f30c67b84562d824db836.png'} alt={'img'}/>
            </div>
            <SearchMoviesForm/>
            <ThemeSwitcher/>
        </div>
    );
};

export {Header};