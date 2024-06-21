import React, { FC } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import css from './Genre.module.css';
import Badge from '@mui/material/Badge';
import {IGenreInterfaces} from "../../../interfaces/IGenreInterfaces";

interface IProps {
    genre: IGenreInterfaces;
    onGenreClick: (genre: IGenreInterfaces) => void;
    isActive: boolean;
    count: number;
}

const Genre: FC<IProps> = ({ genre, isActive, count }) => {
    const { id, name } = genre;
    const navigate = useNavigate();
    const location = useLocation();

    const isGenresPage = location.pathname.startsWith('/genres');
    return (
        <div>
            <button className={`${css.genre_badge} ${isActive && isGenresPage ? css.active : ''}`}
                    onClick={() => navigate(`/genres/${id}`)}
                    >
                {name}
                <Badge className={css.numbers} badgeContent={count} max={1000}  color="primary"></Badge>
            </button>
        </div>
    );
};

export { Genre };