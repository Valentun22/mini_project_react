// import {FC, PropsWithChildren, useState} from 'react';
// import {IGenreInterfaces} from "../../../interfaces/IGenreInterfaces";
// import {MovieInfo} from "../../MovieInfoComponent/MovieInfo";
// import {IMovieInterface} from "../../../interfaces/IMovieInterface";
//
// interface IProps extends PropsWithChildren {
//     movieCard: IMovieInterface
// }
// const MovieCard: FC<IProps> = ({movieCard}) => {
//     const {
//         title, overview, vote_average, genres, backdrop_path,
//         release_date, runtime, poster_path, adult, original_language, original_title, video,vote_count
//     } = movieCard;
//     const [, setSelectedGenre] = useState<IGenreInterfaces | null>(null);
//     const handleGenreClick = (genre: IGenreInterfaces) => {
//         setSelectedGenre(genre);
//     }
//     return (
//         <div>
//             <MovieInfo
//                 title={title}
//                 overview={overview}
//                 vote_average={vote_average}
//                 genres={genres}
//                 backdrop_path={backdrop_path}
//                 release_date={release_date}
//                 runtime={runtime}
//                 poster_path={poster_path}
//                 adult={adult}
//                 original_language={original_language}
//                 original_title={original_title}
//                 video={video}
//                 vote_count={vote_count}
//                 onGenreClick={handleGenreClick}
//             />
//         </div>
//     );
// };
//
// export {MovieCard};


import {FC, PropsWithChildren, useState} from 'react';
import {IMovieInterface} from "../../../interfaces/IMovieInterface";
import {MovieInfo} from "../../MovieInfoComponent/MovieInfo";
import {IGenreInterfaces} from "../../../interfaces/IGenreInterfaces";


interface IProps extends PropsWithChildren {
    movieCard: IMovieInterface
}

const MovieCard: FC<IProps> = ({movieCard}) => {
    const {
        title, overview, vote_average, genres, backdrop_path,
        release_date, runtime, poster_path, original_language
    } = movieCard;
    const [, setSelectedGenre] = useState<IGenreInterfaces | null>(null);

    const handleGenreClick = (genre: IGenreInterfaces) => {
        setSelectedGenre(genre);
    }
    return (
        <div>
            <MovieInfo
                title={title}
                overview={overview}
                vote_average={vote_average}
                genres={genres}
                backdrop_path={backdrop_path}
                release_date={release_date}
                runtime={runtime}
                onGenreClick={handleGenreClick}
                poster_path={poster_path}
                original_language={original_language}
            />
        </div>
    );
};

export {MovieCard};