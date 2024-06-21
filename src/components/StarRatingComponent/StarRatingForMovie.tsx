import React from 'react';
import {StarRating} from 'star-rating-react-ts';
import css from './StarRatingForMovie.module.css';

interface IProps {
    rating: number;
}
const sizeStars= {
    colors: {
        backgroundDefault: 'lightgray',
        backgroundColorActive: '#d82727',
        backgroundColorHover: '#0a3186'
    },
    size: 22
};

const StarRatingForMovie: React.FC<IProps> = ({rating}) => {
    return (
        <div className={css.starRating}>
        <StarRating
            numStars={10}
            initialRating={rating}
            readOnly={true}
            theme={sizeStars}
        />
        </div>
    );
}

export {
    StarRatingForMovie
}